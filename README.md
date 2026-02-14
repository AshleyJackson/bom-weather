# bomweather

A simple package to receive data from the [Australian Bureau of Meteorology](http://www.bom.gov.au/) API.

## Installation

```bash
npm install bomweather
```

## How to Use

All access to the API endpoints is done off the `BOM` class

```ts
import { BOM } from "bomweather";
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
import { BOM, Cities } from "bomweather";

await BOM.getObservations(Cities.SYDNEY);
```

Get radar image GIF for Sydney (Terrey Hills)

```ts
import { BOM, RadarRegions } from "bomweather";
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

This package is automatically published to npm when changes are pushed to the `main` branch. The publish workflow:

1. Reads the version from `package.json`
2. Creates a Git tag (e.g., `v1.1.9`) and GitHub release
3. Publishes to npmjs with provenance using OIDC

To publish a new version:

1. Update the version in `package.json` (e.g., `1.1.9` → `1.2.0`)
2. Commit and push to `main` branch
3. The workflow will automatically tag, release, and publish

**Prerequisites**: The `NPM_TOKEN` secret must be configured in the repository settings with a valid npm access token that has publish permissions for the `bomweather` package.

## Disclaimer

_Please Note: This package is meant for test purposes only. Under no circumstances is this API to be used for commercial or monetary purposes. Please contact [BOM](http://www.bom.gov.au/) directly to get access to a commercial license. All contributors on this package are in no way liable for any legal action taken against those misusing this API. By using this package you are acknowledging this disclaimer and agree to take personal responsibility to any misuse of this API_
