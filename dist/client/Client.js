"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOM = void 0;
const Fetch_1 = require("../utils/Fetch");
/**
 * A static class with all BOM API endpoints
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class BOM {
    /**
     * Search for locations by name
     * @param {string} query The search query (minimum 3 characters)
     * @returns {LocationSearch} A `LocationSearch` object containing matching locations
     */
    static async searchLocations(query) {
        try {
            if (query.length < 3) {
                throw new Fetch_1.BOMApiError('Search query must be at least 3 characters', 400, 'Bad Request');
            }
            return await Fetch_1.Fetch.get(`/locations?search=${encodeURIComponent(query)}`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to search locations for query "${query}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get location information for a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {LocationInfo} A `LocationInfo` object
     */
    static async getLocationInfo(geohash) {
        try {
            return await Fetch_1.Fetch.get(`/locations/${geohash}`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get location info for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get the Observational Data of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {Observation} An `Observation` object
     */
    static async getObservations(geohash) {
        try {
            return await Fetch_1.Fetch.get(`/locations/${geohash}/observations`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get observations for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get the Warnings Data of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {Warnings} A `Warnings` object
     */
    static async getWarnings(geohash) {
        try {
            return await Fetch_1.Fetch.get(`/locations/${geohash}/warnings`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get warnings for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get detailed warning information by warning ID
     * @param {string} warningId The warning ID (from getWarnings)
     * @returns {WarningDetails} A `WarningDetails` object
     */
    static async getWarningDetails(warningId) {
        try {
            return await Fetch_1.Fetch.get(`/warnings/${warningId}`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get warning details for ID "${warningId}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get the Daily Forecast of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {DailyForecast} A `DailyForecast` object
     */
    static async getDailyForecast(geohash) {
        try {
            return await Fetch_1.Fetch.get(`/locations/${geohash}/forecasts/daily`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get daily forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get the Hourly Forecast of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {HourlyForecast} A `HourlyForecast` object
     */
    static async getHourlyForecast(geohash) {
        try {
            return await Fetch_1.Fetch.get(`/locations/${geohash}/forecasts/hourly`);
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get hourly forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get the Three-Hour Forecast of a geohash (first 3 hours from hourly forecast)
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {ThreeHourForecast} A `ThreeHourForecast` object
     */
    static async getThreeHourForecast(geohash) {
        try {
            const hourlyForecast = await Fetch_1.Fetch.get(`/locations/${geohash}/forecasts/hourly`);
            return {
                metadata: hourlyForecast.metadata,
                data: hourlyForecast.data.slice(0, 3)
            };
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get three-hour forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
    /**
     * Get the Rain Forecast of a geohash (extracted from today's daily forecast)
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {RainForecast} A `RainForecast` object
     */
    static async getRainForecast(geohash) {
        try {
            const dailyForecast = await Fetch_1.Fetch.get(`/locations/${geohash}/forecasts/daily`);
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
        }
        catch (error) {
            if (error instanceof Fetch_1.BOMApiError) {
                throw new Fetch_1.BOMApiError(`Failed to get rain forecast for geohash "${geohash}": ${error.message}`, error.statusCode, error.statusText);
            }
            throw error;
        }
    }
}
exports.BOM = BOM;
//# sourceMappingURL=Client.js.map