import { AxiosRequestConfig } from 'axios';
export declare class BOMApiError extends Error {
    statusCode?: number;
    statusText?: string;
    constructor(message: string, statusCode?: number, statusText?: string);
}
export declare class Fetch {
    private static rootAPI;
    static get<T>(route: string, options?: AxiosRequestConfig): Promise<T>;
}
//# sourceMappingURL=Fetch.d.ts.map