"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const cloudinary_middleware_1 = require("@/middleware/cloudinary.middleware");
const multer_middleware_1 = __importDefault(require("@/middleware/multer.middleware"));
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/upload', multer_middleware_1.default.single('image'), cloudinary_middleware_1.uploadToCloudinary, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.imageUrl) {
        return res.status(400).json({
            success: false,
            message: 'Tidak ada file yang diupload',
        });
    }
    return res.status(200).json({
        success: true,
        message: 'Gambar berhasil dikonversi ke WebP dan diupload',
        data: {
            imageUrl: req.body.imageUrl,
            cloudinaryId: req.body.cloudinaryId,
        },
    });
}));
