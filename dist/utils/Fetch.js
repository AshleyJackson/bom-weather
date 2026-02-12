"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetch = exports.BOMApiError = void 0;
const axios_1 = __importStar(require("axios"));
class BOMApiError extends Error {
    statusCode;
    statusText;
    constructor(message, statusCode, statusText) {
        super(message);
        this.name = 'BOMApiError';
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
}
exports.BOMApiError = BOMApiError;
/* eslint-disable @typescript-eslint/no-extraneous-class */
class Fetch {
    static rootAPI = 'https://api.weather.bom.gov.au/v1';
    static async get(route, options) {
        try {
            const response = await axios_1.default.get(`${this.rootAPI}${route}`, options);
            return response.data;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError) {
                const status = error.response?.status;
                const statusText = error.response?.statusText ?? error.message;
                throw new BOMApiError(`Request failed: ${statusText}`, status, statusText);
            }
            throw new BOMApiError(`Request failed: ${String(error)}`);
        }
    }
}
exports.Fetch = Fetch;
//# sourceMappingURL=Fetch.js.map