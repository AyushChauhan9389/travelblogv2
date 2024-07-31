"use server";

import {blogschema} from "@/lib/zodschema";
import {actionClient} from "@/lib/safe-action";
import {revalidatePath} from "next/cache";
import {currentUser} from "@clerk/nextjs/server";
import {eq} from "drizzle-orm";
import {db} from "@/app/db/db";
import {posts, users} from "@/app/db/schema";

export async function getUserIdAction() {
    try {
        const user = await currentUser()
        const currentuserid = user?.id.toString();
        if (!currentuserid) return null;
        const userfinal = await db.select().from(users).where(eq(users.userId, currentuserid))
        return userfinal[0].id
    } catch (error: any) {
        return new error("Failed to get user id")
    }
}
export const createBlogAction = actionClient
    .schema(blogschema)
    .action(async ({ parsedInput: { title, slug, content, headerimageurl } }) => {
        try {
            const userid = await getUserIdAction()
            await db.insert(posts).values({
                title: title,
                slug: slug,
                content: content,
                headerimageurl: headerimageurl,
                authorId: userid,
                categoryId: 1,
                isfeatured: false,
                ispublished: true
            })
            return {
                success: 'Added Successfully',
            };
        }catch (error: any) {
            return { failure: "Incorrect credentials" };
        }
    });