import * as ftp from 'basic-ftp';
import { Writable } from 'stream';

export class BOMFtpError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'BOMFtpError';
	}
}

 
export class FtpFetch {
	private static ftpHost = 'ftp.bom.gov.au';
	private static ftpBasePath = '/anon/gen/radar';

	public static async getRadarGif(regionCode: string): Promise<Buffer> {
		const client = new ftp.Client();
		client.ftp.verbose = false;

		try {
			// Connect to the FTP server
			await client.access({
				host: this.ftpHost,
				secure: false
			});

			// Download the GIF file
			const gifPath = `${this.ftpBasePath}/${regionCode}.gif`;
			const chunks: Buffer[] = [];

			// Create a writable stream to collect the data
			const writeStream = new Writable({
				write(chunk: Buffer, _encoding: BufferEncoding, callback: (error?: Error | null) => void) {
					chunks.push(chunk);
					callback();
				}
			});

			await client.downloadTo(writeStream, gifPath);

			// Combine all chunks into a single buffer
			return Buffer.concat(chunks);
		} catch (error) {
			if (error instanceof Error) {
				throw new BOMFtpError(`Failed to download radar image for region "${regionCode}": ${error.message}`);
			}
			throw new BOMFtpError(`Failed to download radar image for region "${regionCode}"`);
		} finally {
			client.close();
		}
	}
}
