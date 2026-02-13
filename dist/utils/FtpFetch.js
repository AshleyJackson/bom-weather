"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtpFetch = exports.BOMFtpError = void 0;
const ftp = __importStar(require("basic-ftp"));
const stream_1 = require("stream");
class BOMFtpError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BOMFtpError';
    }
}
exports.BOMFtpError = BOMFtpError;
/* eslint-disable @typescript-eslint/no-extraneous-class */
class FtpFetch {
    static ftpHost = 'ftp.bom.gov.au';
    static ftpBasePath = '/anon/gen/radar';
    static async getRadarGif(regionCode) {
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
            const chunks = [];
            // Create a writable stream to collect the data
            const writeStream = new stream_1.Writable({
                write(chunk, _encoding, callback) {
                    chunks.push(chunk);
                    callback();
                }
            });
            await client.downloadTo(writeStream, gifPath);
            // Combine all chunks into a single buffer
            return Buffer.concat(chunks);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new BOMFtpError(`Failed to download radar image for region "${regionCode}": ${error.message}`);
            }
            throw new BOMFtpError(`Failed to download radar image for region "${regionCode}"`);
        }
        finally {
            client.close();
        }
    }
}
exports.FtpFetch = FtpFetch;
//# sourceMappingURL=FtpFetch.js.map