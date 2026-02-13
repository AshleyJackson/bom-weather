"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../client/structures");
const index_1 = require("../index");
async function runTest(name, fn) {
    try {
        await fn();
        return { name, passed: true };
    }
    catch (error) {
        return { name, passed: false, error: error instanceof Error ? error.message : String(error) };
    }
}
async function runTests() {
    const results = [];
    results.push(await runTest('searchLocations returns data with expected structure', async () => {
        const searchResults = await index_1.BOM.searchLocations('Sydney');
        if (!searchResults || typeof searchResults !== 'object') {
            throw new Error('Expected searchResults to be an object');
        }
        if (!('data' in searchResults)) {
            throw new Error('Expected searchResults to have a data property');
        }
        if (!Array.isArray(searchResults.data)) {
            throw new Error('Expected searchResults.data to be an array');
        }
    }));
    results.push(await runTest('searchLocations throws error for short query', async () => {
        try {
            await index_1.BOM.searchLocations('ab');
            throw new Error('Expected an error to be thrown');
        }
        catch (error) {
            if (error instanceof Error && error.message === 'Expected an error to be thrown') {
                throw error;
            }
        }
    }));
    results.push(await runTest('getLocationInfo returns data with expected structure', async () => {
        const locationInfo = await index_1.BOM.getLocationInfo(structures_1.Cities.SYDNEY);
        if (!locationInfo || typeof locationInfo !== 'object') {
            throw new Error('Expected locationInfo to be an object');
        }
        if (!('data' in locationInfo)) {
            throw new Error('Expected locationInfo to have a data property');
        }
        if (!locationInfo.data.geohash) {
            throw new Error('Expected locationInfo.data to have a geohash');
        }
    }));
    results.push(await runTest('getObservations returns data with expected structure', async () => {
        const observations = await index_1.BOM.getObservations(structures_1.Cities.ADELAIDE);
        if (!observations || typeof observations !== 'object') {
            throw new Error('Expected observations to be an object');
        }
        if (!('data' in observations)) {
            throw new Error('Expected observations to have a data property');
        }
    }));
    results.push(await runTest('getWarnings returns data with expected structure', async () => {
        const warnings = await index_1.BOM.getWarnings(structures_1.Cities.BRISBANE);
        if (!warnings || typeof warnings !== 'object') {
            throw new Error('Expected warnings to be an object');
        }
        if (!('data' in warnings)) {
            throw new Error('Expected warnings to have a data property');
        }
    }));
    results.push(await runTest('getDailyForecast returns data with expected structure', async () => {
        const dailyForecast = await index_1.BOM.getDailyForecast(structures_1.Cities.CANBERRA);
        if (!dailyForecast || typeof dailyForecast !== 'object') {
            throw new Error('Expected dailyForecast to be an object');
        }
        if (!('data' in dailyForecast)) {
            throw new Error('Expected dailyForecast to have a data property');
        }
    }));
    results.push(await runTest('getHourlyForecast returns data with expected structure', async () => {
        const hourlyForecast = await index_1.BOM.getHourlyForecast(structures_1.Cities.DARWIN);
        if (!hourlyForecast || typeof hourlyForecast !== 'object') {
            throw new Error('Expected hourlyForecast to be an object');
        }
        if (!('data' in hourlyForecast)) {
            throw new Error('Expected hourlyForecast to have a data property');
        }
    }));
    results.push(await runTest('getThreeHourForecast returns data with expected structure', async () => {
        const threeHourForecast = await index_1.BOM.getThreeHourForecast(structures_1.Cities.HOBART);
        if (!threeHourForecast || typeof threeHourForecast !== 'object') {
            throw new Error('Expected threeHourForecast to be an object');
        }
        if (!('data' in threeHourForecast)) {
            throw new Error('Expected threeHourForecast to have a data property');
        }
        if (threeHourForecast.data.length > 3) {
            throw new Error('Expected threeHourForecast to have at most 3 data entries');
        }
    }));
    results.push(await runTest('getRainForecast returns data with expected structure', async () => {
        const rainForecast = await index_1.BOM.getRainForecast(structures_1.Cities.MELBOURNE);
        if (!rainForecast || typeof rainForecast !== 'object') {
            throw new Error('Expected rainForecast to be an object');
        }
        if (!('data' in rainForecast)) {
            throw new Error('Expected rainForecast to have a data property');
        }
        if (!('metadata' in rainForecast)) {
            throw new Error('Expected rainForecast to have a metadata property');
        }
    }));
    results.push(await runTest('getObservations throws error for invalid geohash', async () => {
        try {
            await index_1.BOM.getObservations('invalid_geohash');
            throw new Error('Expected an error to be thrown');
        }
        catch (error) {
            if (error instanceof Error && error.message === 'Expected an error to be thrown') {
                throw error;
            }
        }
    }));
    results.push(await runTest('getRadarImage returns a Buffer with data', async () => {
        const radarImage = await index_1.BOM.getRadarImage('IDR663');
        if (!radarImage || !Buffer.isBuffer(radarImage)) {
            throw new Error('Expected radarImage to be a Buffer');
        }
        if (radarImage.length === 0) {
            throw new Error('Expected radarImage to have data');
        }
    }));
    results.push(await runTest('getRadarImage throws error for invalid region code', async () => {
        try {
            await index_1.BOM.getRadarImage('INVALID_CODE_THAT_DOES_NOT_EXIST_999');
            throw new Error('Expected an error to be thrown');
        }
        catch (error) {
            if (error instanceof Error && error.message === 'Expected an error to be thrown') {
                throw error;
            }
        }
    }));
    console.log('\n=== Test Results ===\n');
    let passed = 0;
    let failed = 0;
    for (const result of results) {
        if (result.passed) {
            console.log(`✓ ${result.name}`);
            passed++;
        }
        else {
            console.log(`✗ ${result.name}`);
            console.log(`  Error: ${result.error}`);
            failed++;
        }
    }
    console.log(`\n${passed} passed, ${failed} failed\n`);
    if (failed > 0) {
        process.exit(1);
    }
}
runTests().catch((error) => {
    console.error('Test runner failed:', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map