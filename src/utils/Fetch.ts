import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export class BOMApiError extends Error {
	public statusCode?: number;
	public statusText?: string;

	constructor(message: string, statusCode?: number, statusText?: string) {
		super(message);
		this.name = 'BOMApiError';
		this.statusCode = statusCode;
		this.statusText = statusText;
	}
}

/* eslint-disable @typescript-eslint/no-extraneous-class */
export class Fetch {
	private static rootAPI = 'https://api.weather.bom.gov.au/v1';

	public static async get<T>(route: string, options?: AxiosRequestConfig): Promise<T> {
		try {
			const response = await axios.get<T>(`${this.rootAPI}${route}`, options);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const status = error.response?.status;
				const statusText = error.response?.statusText ?? error.message;
				throw new BOMApiError(`Request failed: ${statusText}`, status, statusText);
			}
			throw new BOMApiError(`Request failed: ${String(error)}`);
		}
	}
}
