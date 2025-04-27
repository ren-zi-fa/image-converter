"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const vars_1 = __importDefault(require("@/config/vars"));
// Konfigurasi cloudinary
cloudinary_1.v2.config({
    cloud_name: vars_1.default.CLOUDINARY_NAME,
    api_key: vars_1.default.CLOUDINARY_API_KEY,
    api_secret: vars_1.default.CLOUDINARY_API_SECRET,
});
exports.default = cloudinary_1.v2;
