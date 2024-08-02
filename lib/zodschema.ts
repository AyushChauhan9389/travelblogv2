import * as z from 'zod';
import {comment} from "postcss";
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
export const saveblogschema = z.object({
    title: z.string(),
    headerimageurl: z.string().optional(),
    slug: z.string(),
    content: z.string(),
    blogid: z.number()
})

export const commentschema = z.object({
    comment: z.string().min(1).max(255),
    postId: z.number()
})