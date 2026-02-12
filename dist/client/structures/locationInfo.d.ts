export interface LocationInfo {
    metadata: LocationInfoMetadata;
    data: LocationInfoData;
}
export interface LocationInfoMetadata {
    response_timestamp: Date;
}
export interface LocationInfoData {
    geohash: string;
    timezone: string;
    latitude: number;
    longitude: number;
    marine_area_id: string | null;
    tidal_point: string | null;
    id: string;
    name: string;
    state: string;
}
//# sourceMappingURL=locationInfo.d.ts.map