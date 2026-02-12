export interface WarningDetails {
	metadata: WarningDetailsMetadata;
	data: WarningDetailsData;
}

export interface WarningDetailsMetadata {
	issue_time: Date;
	response_timestamp: Date;
}

export interface WarningDetailsData {
	id: string;
	type: string;
	title: string;
	short_title: string;
	state: string;
	message: string;
	warning_group_type: string;
	issue_time: Date;
	expiry_time: Date;
	phase: string;
}
