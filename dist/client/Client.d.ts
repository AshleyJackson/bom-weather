import type { DailyForecast, HourlyForecast, ThreeHourForecast, RainForecast, Observation, Warnings, WarningDetails, LocationSearch, LocationInfo } from './structures';
/**
 * A static class with all BOM API endpoints
 */
export declare class BOM {
    /**
     * Search for locations by name
     * @param {string} query The search query (minimum 3 characters)
     * @returns {LocationSearch} A `LocationSearch` object containing matching locations
     */
    static searchLocations(query: string): Promise<LocationSearch>;
    /**
     * Get location information for a geohash
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {LocationInfo} A `LocationInfo` object
     */
    static getLocationInfo(geohash: string): Promise<LocationInfo>;
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
     * Get detailed warning information by warning ID
     * @param {string} warningId The warning ID (from getWarnings)
     * @returns {WarningDetails} A `WarningDetails` object
     */
    static getWarningDetails(warningId: string): Promise<WarningDetails>;
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
    /**
     * Get the Three-Hour Forecast of a geohash (first 3 hours from hourly forecast)
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {ThreeHourForecast} A `ThreeHourForecast` object
     */
    static getThreeHourForecast(geohash: string): Promise<ThreeHourForecast>;
    /**
     * Get the Rain Forecast of a geohash (extracted from today's daily forecast)
     * @param {string} geohash The geohash to use in the endpoint
     * @returns {RainForecast} A `RainForecast` object
     */
    static getRainForecast(geohash: string): Promise<RainForecast>;
    /**
     * Get the radar image for a region from BOM FTP server
     * @param {string} regionCode The radar region code (e.g., 'IDR663')
     * @returns {Buffer} A Buffer containing the radar GIF image
     */
    static getRadarImage(regionCode: string): Promise<Buffer>;
}
//# sourceMappingURL=Client.d.ts.map