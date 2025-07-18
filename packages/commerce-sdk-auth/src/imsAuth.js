"use strict";
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImsAccessToken = getImsAccessToken;
// @ts-ignore
var simple_oauth2_1 = require("simple-oauth2");
/**
 * Generate access token to connect with Adobe tools (e.g. IO Events)
 *
 * @param {object} params includes env parameters
 * @returns {Promise<ImsTokenResponse>} returns the access token
 * @throws {Error} in case of any failure
 */
function getImsAccessToken(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var config, client, tokenParams, accessToken, error_1;
        var clientId = _b.clientId, clientSecret = _b.clientSecret, _c = _b.host, host = _c === void 0 ? 'https://ims-na1.adobelogin.com' : _c, scopes = _b.scopes;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    config = {
                        client: {
                            id: clientId,
                            secret: clientSecret,
                        },
                        auth: {
                            tokenHost: host,
                            tokenPath: '/ims/token/v3',
                        },
                        options: {
                            bodyFormat: 'form',
                            authorizationMethod: 'body',
                        },
                    };
                    client = new simple_oauth2_1.ClientCredentials(config);
                    tokenParams = {
                        scope: scopes,
                    };
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.getToken(tokenParams)];
                case 2:
                    accessToken = _d.sent();
                    return [2 /*return*/, accessToken.token];
                case 3:
                    error_1 = _d.sent();
                    throw new Error("Unable to get access token ".concat(error_1.message));
                case 4: return [2 /*return*/];
            }
        });
    });
}
