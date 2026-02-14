# bomweather

A simple package to receive data from the [Australian Bureau of Meteorology](http://www.bom.gov.au/) API.

## Installation

```bash
bun add @ashleyjacksonnet/bomweather
```

## How to Use

All access to the API endpoints is done off the `BOM` class

```ts
import { BOM } from "@ashleyjacksonnet/bomweather";
```

All methods are static, and can be accessed without constructing the class. To access an endpoint, all methods require a 6-digit [Geohash](https://en.wikipedia.org/wiki/Geohash) for the city to receive data for. Enums have been included for Geohashes of all the major cities of Australia.

For radar images, a `RadarRegions` enum is also provided with common BOM radar region codes.

The current available endpoints are as follows

```ts
// Search for locations by name (returns geohashes)
BOM.searchLocations("Sydney");

// Get location information (timezone, coordinates, etc.)
BOM.getLocationInfo("GEOHASH");

// Current Weather Observations
BOM.getObservations("GEOHASH");

// Current Weather Warnings (if available)
BOM.getWarnings("GEOHASH");

// Detailed Warning Information
BOM.getWarningDetails("WARNING_ID");

// Array of Current and Upcoming Daily Forecasts
BOM.getDailyForecast("GEOHASH");

// Array of Current and Upcoming Hourly Forecasts
BOM.getHourlyForecast("GEOHASH");

// Array of Current and Upcoming Three-Hour Forecasts
BOM.getThreeHourForecast("GEOHASH");

// Current Rain Forecast (if available)
BOM.getRainForecast("GEOHASH");

// Get radar image GIF for a region
BOM.getRadarImage("REGION_CODE"); // e.g., 'IDR663'
```

### Examples

Find the current weather observations for Sydney

```ts
import { BOM, Cities } from "@ashleyjacksonnet/bomweather";

await BOM.getObservations(Cities.SYDNEY);
```

Get radar image GIF for Sydney (Terrey Hills)

```ts
import { BOM, RadarRegions } from "@ashleyjacksonnet/bomweather";
import { writeFileSync } from "fs";

const radarImage = await BOM.getRadarImage(RadarRegions.NSW_SYDNEY_TERREY_HILLS);
writeFileSync("radar.gif", radarImage);
```

The `RadarRegions` enum includes comprehensive coverage of all BOM radar stations organized by state:
- **NSW/ACT**: 12 radars including Sydney, Newcastle, Canberra, Wollongong, and more
- **Victoria**: 5 radars including Melbourne, Mildura, Bairnsdale, Yarrawonga, and Rainbow
- **Queensland**: 17 radars including Brisbane, Cairns, Townsville, Mackay, and more
- **South Australia**: 5 radars including Adelaide, Ceduna, Woomera, and Mount Gambier
- **Western Australia**: 13 radars including Perth, Broome, Albany, Carnarvon, and more
- **Northern Territory**: 5 radars including Darwin, Alice Springs, Gove, Katherine, and Warruwi
- **Tasmania**: 2 radars including Hobart and West Takone

All radar codes use state prefixes (e.g., `NSW_`, `VIC_`, `QLD_`) for clarity and easy discovery.

**Note**: Legacy radar names from earlier versions have been removed as they contained incorrect radar codes. Please update your code to use the new state-prefixed names with verified codes.

## Publishing

This package is automatically published to npm when changes are pushed to the `main` branch. The CI/CD workflow:

1. Runs linting checks
2. Runs tests
3. Builds the package and validates the output
4. Tests package installation
5. Reads the version from `package.json`
6. Creates a Git tag (e.g., `v1.1.9`) and GitHub release
7. Publishes to npmjs with provenance using OIDC authentication

To publish a new version:

1. Update the version in `package.json` (e.g., `1.1.9` → `1.2.0`)
2. Commit and push to `main` branch
3. The workflow will automatically lint, test, build, tag, release, and publish

**Note**: The workflow uses OpenID Connect (OIDC) for authentication with npm, which is more secure than using long-lived tokens. No npm token secret is required - authentication is handled automatically through GitHub's OIDC provider.

## Disclaimer

_Please Note: This package is meant for test purposes only. Under no circumstances is this API to be used for commercial or monetary purposes. Please contact [BOM](http://www.bom.gov.au/) directly to get access to a commercial license. All contributors on this package are in no way liable for any legal action taken against those misusing this API. By using this package you are acknowledging this disclaimer and agree to take personal responsibility to any misuse of this API_
