/* Version: 1.1.9 - February 13, 2026 23:40:16 */
'use strict';

var __createBinding = (undefined && undefined.__createBinding) || (Object.create ? (function(o, m, k, k2) {
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
var __exportStar = (undefined && undefined.__exportStar) || function(m, exports$1) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOMFtpError = void 0;
__exportStar(require("./client/Client"), exports);
__exportStar(require("./client/structures"), exports);
var FtpFetch_1 = require("./utils/FtpFetch");
Object.defineProperty(exports, "BOMFtpError", { enumerable: true, get: function () { return FtpFetch_1.BOMFtpError; } });
