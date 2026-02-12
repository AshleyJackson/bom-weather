export interface LocationSearch {
    metadata: LocationSearchMetadata;
    data: LocationSearchData[];
}
export interface LocationSearchMetadata {
    response_timestamp: Date;
}
export interface LocationSearchData {
    geohash: string;
    id: string;
    name: string;
    postcode: string;
    state: string;
}
//# sourceMappingURL=locationSearch.d.ts.map