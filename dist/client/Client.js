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
}
exports.BOM = BOM;
//# sourceMappingURL=Client.js.map