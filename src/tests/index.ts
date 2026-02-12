import { Cities } from '../client/structures';
import { BOM } from '../index';

interface TestResult {
	name: string;
	passed: boolean;
	error?: string;
}

async function runTest(name: string, fn: () => Promise<void>): Promise<TestResult> {
	try {
		await fn();
		return { name, passed: true };
	} catch (error) {
		return { name, passed: false, error: error instanceof Error ? error.message : String(error) };
	}
}

async function runTests(): Promise<void> {
	const results: TestResult[] = [];

	results.push(
		await runTest('getObservations returns data with expected structure', async () => {
			const observations = await BOM.getObservations(Cities.ADELAIDE);
			if (!observations || typeof observations !== 'object') {
				throw new Error('Expected observations to be an object');
			}
			if (!('data' in observations)) {
				throw new Error('Expected observations to have a data property');
			}
		})
	);

	results.push(
		await runTest('getWarnings returns data with expected structure', async () => {
			const warnings = await BOM.getWarnings(Cities.BRISBANE);
			if (!warnings || typeof warnings !== 'object') {
				throw new Error('Expected warnings to be an object');
			}
			if (!('data' in warnings)) {
				throw new Error('Expected warnings to have a data property');
			}
		})
	);

	results.push(
		await runTest('getDailyForecast returns data with expected structure', async () => {
			const dailyForecast = await BOM.getDailyForecast(Cities.CANBERRA);
			if (!dailyForecast || typeof dailyForecast !== 'object') {
				throw new Error('Expected dailyForecast to be an object');
			}
			if (!('data' in dailyForecast)) {
				throw new Error('Expected dailyForecast to have a data property');
			}
		})
	);

	results.push(
		await runTest('getHourlyForecast returns data with expected structure', async () => {
			const hourlyForecast = await BOM.getHourlyForecast(Cities.DARWIN);
			if (!hourlyForecast || typeof hourlyForecast !== 'object') {
				throw new Error('Expected hourlyForecast to be an object');
			}
			if (!('data' in hourlyForecast)) {
				throw new Error('Expected hourlyForecast to have a data property');
			}
		})
	);

	results.push(
		await runTest('getObservations throws error for invalid geohash', async () => {
			try {
				await BOM.getObservations('invalid_geohash');
				throw new Error('Expected an error to be thrown');
			} catch (error) {
				if (error instanceof Error && error.message === 'Expected an error to be thrown') {
					throw error;
				}
			}
		})
	);

	console.log('\n=== Test Results ===\n');
	let passed = 0;
	let failed = 0;

	for (const result of results) {
		if (result.passed) {
			console.log(`✓ ${result.name}`);
			passed++;
		} else {
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
