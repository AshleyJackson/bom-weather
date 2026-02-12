import type { DailyForecast, HourlyForecast, Observation, Warnings } from './structures';
/**
 * A static class with all BOM API endpoints
 */
export declare class BOM {
    /**
     * Get the Observational Data of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {Observation} An `Observation` object
     */
    static getObservations(geohash: string): Promise<Observation>;
    /**
     * Get the Warnings Data of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {Warnings} A `Warnings` object
     */
    static getWarnings(geohash: string): Promise<Warnings>;
    /**
     * Get the Daily Forecast of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {DailyForecast} A `DailyForecast` object
     */
    static getDailyForecast(geohash: string): Promise<DailyForecast>;
    /**
     * Get the Hourly Forecast of a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {HourlyForecast} A `HourlyForecast` object
     */
    static getHourlyForecast(geohash: string): Promise<HourlyForecast>;
}
//# sourceMappingURL=Client.d.ts.map