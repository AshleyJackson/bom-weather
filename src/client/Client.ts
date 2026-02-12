import { Fetch, BOMApiError } from '../utils/Fetch';
import type { DailyForecast, HourlyForecast, Observation, Warnings } from './structures';

/**
 * A static class with all BOM API endpoints
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BOM {
	/**
	 * Get the Observational Data of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {Observation} An `Observation` object
	 */
	public static async getObservations(geohash: string): Promise<Observation> {
		try {
			return await Fetch.get<Observation>(`/locations/${geohash}/observations`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get observations for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

	/**
	 * Get the Warnings Data of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {Warnings} A `Warnings` object
	 */
	public static async getWarnings(geohash: string): Promise<Warnings> {
		try {
			return await Fetch.get<Warnings>(`/locations/${geohash}/warnings`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get warnings for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

	/**
	 * Get the Daily Forecast of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {DailyForecast} A `DailyForecast` object
	 */
	public static async getDailyForecast(geohash: string): Promise<DailyForecast> {
		try {
			return await Fetch.get<DailyForecast>(`/locations/${geohash}/forecasts/daily`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get daily forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

	/**
	 * Get the Hourly Forecast of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {HourlyForecast} A `HourlyForecast` object
	 */
	public static async getHourlyForecast(geohash: string): Promise<HourlyForecast> {
		try {
			return await Fetch.get<HourlyForecast>(`/locations/${geohash}/forecasts/hourly`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get hourly forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}
}
