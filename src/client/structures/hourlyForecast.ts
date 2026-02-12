import type { ForecastIconIndicator } from './global';

export interface HourlyForecast {
	metadata: HourlyForecastMetadata;
	data: HourlyForecastData[];
}

export interface ThreeHourForecast {
	metadata: HourlyForecastMetadata;
	data: HourlyForecastData[];
}

export interface HourlyForecastMetadata {
	issue_time: Date;
	response_timestamp: Date;
	copyright: string;
}

export interface HourlyForecastData {
	rain: HourlyForecastDataRain;
	wind: HourlyForecastDataWind;
	temp: number;
	temp_feels_like: number;
	dew_point: number;
	relative_humidity: number;
	uv: number;
	icon_descriptor: ForecastIconIndicator;
	time: Date;
	is_night: boolean;
	next_forecast_period: Date;
	next_three_hourly_forecast_period: Date;
}

export interface HourlyForecastDataRain {
	amount: HourlyForecastDataRainAmount;
	chance: number;
	precipitation_amount_10_percent_chance: number;
	precipitation_amount_25_percent_chance: number;
	precipitation_amount_50_percent_chance: number;
}

export interface HourlyForecastDataWind {
	speed_kilometre: number;
	speed_knot: number;
	direction: string;
	gust_speed_knot: number;
	gust_speed_kilometre: number;
}

export interface HourlyForecastDataRainAmount {
	min: number;
	max: number | null;
	units: string;
}
