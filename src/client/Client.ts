import { Fetch, BOMApiError } from '../utils/Fetch';
import { FtpFetch, BOMFtpError } from '../utils/FtpFetch';
import type {
	DailyForecast,
	HourlyForecast,
	ThreeHourForecast,
	RainForecast,
	Observation,
	Warnings,
	WarningDetails,
	LocationSearch,
	LocationInfo
} from './structures';

/**
 * A static class with all BOM API endpoints
 */
 
export class BOM {
	/**
	 * Search for locations by name
	 * @param {string} query The search query (minimum 3 characters)
	 * @returns {LocationSearch} A `LocationSearch` object containing matching locations
	 */
	public static async searchLocations(query: string): Promise<LocationSearch> {
		try {
			if (query.length < 3) {
				throw new BOMApiError('Search query must be at least 3 characters', 400, 'Bad Request');
			}
			return await Fetch.get<LocationSearch>(`/locations?search=${encodeURIComponent(query)}`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to search locations for query "${query}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

	/**
	 * Get location information for a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {LocationInfo} A `LocationInfo` object
	 */
	public static async getLocationInfo(geohash: string): Promise<LocationInfo> {
		try {
			return await Fetch.get<LocationInfo>(`/locations/${geohash}`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get location info for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

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
	 * Get detailed warning information by warning ID
	 * @param {string} warningId The warning ID (from getWarnings)
	 * @returns {WarningDetails} A `WarningDetails` object
	 */
	public static async getWarningDetails(warningId: string): Promise<WarningDetails> {
		try {
			return await Fetch.get<WarningDetails>(`/warnings/${warningId}`);
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get warning details for ID "${warningId}": ${error.message}`, error.statusCode, error.statusText);
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

	/**
	 * Get the Three-Hour Forecast of a geohash (first 3 hours from hourly forecast)
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {ThreeHourForecast} A `ThreeHourForecast` object
	 */
	public static async getThreeHourForecast(geohash: string): Promise<ThreeHourForecast> {
		try {
			const hourlyForecast = await Fetch.get<HourlyForecast>(`/locations/${geohash}/forecasts/hourly`);
			return {
				metadata: hourlyForecast.metadata,
				data: hourlyForecast.data.slice(0, 3)
			};
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get three-hour forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

	/**
	 * Get the Rain Forecast of a geohash (extracted from today's daily forecast)
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {RainForecast} A `RainForecast` object
	 */
	public static async getRainForecast(geohash: string): Promise<RainForecast> {
		try {
			const dailyForecast = await Fetch.get<DailyForecast>(`/locations/${geohash}/forecasts/daily`);
			const today = dailyForecast.data[0];
			return {
				metadata: {
					response_timestamp: dailyForecast.metadata.response_timestamp
				},
				data: {
					amount: today?.rain?.amount
						? {
								min: today.rain.amount.min,
								max: today.rain.amount.max,
								units: today.rain.amount.units
							}
						: null,
					chance: today?.rain?.chance ?? null,
					start_time: today?.date ?? null
				}
			};
		} catch (error) {
			if (error instanceof BOMApiError) {
				throw new BOMApiError(`Failed to get rain forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
			}
			throw error;
		}
	}

	/**
	 * Get the radar image for a region from BOM FTP server
	 * @param {string} regionCode The radar region code (e.g., 'IDR663')
	 * @returns {Buffer} A Buffer containing the radar GIF image
	 */
	public static async getRadarImage(regionCode: string): Promise<Buffer> {
		try {
			return await FtpFetch.getRadarGif(regionCode);
		} catch (error) {
			if (error instanceof BOMFtpError) {
				throw error;
			}
			throw new BOMFtpError(`Failed to get radar image for region "${regionCode}": ${String(error)}`);
		}
	}
}
