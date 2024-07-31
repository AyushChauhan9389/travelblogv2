import * as z from 'zod';
const MAX_UPLOAD_SIZE = 1024 * 1024 * 20; // 3MB
const MAX_FILE_SIZE = 1024 * 1024 * 20;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
export const blogschema = z.object({
    title: z.string(),
    headerimageurl: z.string(),
    slug: z.string(),
    content: z.string(),
})