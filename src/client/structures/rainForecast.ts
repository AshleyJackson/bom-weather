export interface RainForecast {
	metadata: RainForecastMetadata;
	data: RainForecastData;
}

export interface RainForecastMetadata {
	response_timestamp: Date;
}

export interface RainForecastData {
	amount: RainForecastDataAmount | null;
	chance: number | null;
	start_time: Date | null;
}

export interface RainForecastDataAmount {
	min: number;
	max: number | null;
	units: string;
}
