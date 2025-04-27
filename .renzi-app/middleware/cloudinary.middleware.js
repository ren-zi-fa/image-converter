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
exports.uploadToCloudinary = void 0;
const cloudinary_1 = __importDefault(require("@/config/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const uploadToCloudinary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Jika tidak ada file terupload, lanjut ke middleware berikutnya
        if (!req.file) {
            return next();
        }
        // Upload ke cloudinary (misal menggunakan cloudinary SDK)
        const result = yield cloudinary_1.default.uploader.upload(req.file.path, {
            folder: 'converted_images',
            format: 'webp',
            transformation: [{ quality: 'auto:good' }],
        });
        // Hapus file lokal setelah berhasil upload ke cloudinary
        fs_1.default.unlinkSync(req.file.path);
        // Tambahkan hasil upload cloudinary ke req.body
        req.body.imageUrl = result.secure_url;
        req.body.cloudinaryId = result.public_id;
        // Lanjutkan ke middleware berikutnya
        next();
    }
    catch (error) {
        // Hapus file lokal jika terjadi error saat upload ke cloudinary
        if (req.file && req.file.path) {
            fs_1.default.unlinkSync(req.file.path);
        }
    }
});
exports.uploadToCloudinary = uploadToCloudinary;
