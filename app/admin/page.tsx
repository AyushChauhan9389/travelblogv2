import adminControl from "@/lib/AdminControl";
import {error} from "console";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {db} from "@/app/db/db";
import {count} from "drizzle-orm";
import {posts, users} from "@/app/db/schema";
import { Button } from "@/components/ui/button";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import DeleteBtn3 from "@/components/defaultcompo/DeleteCat";
import DeleteBtn2 from "@/components/defaultcompo/DeleteData";

export default async function AdminPage(){
    const isAdmin = await adminControl()
    const toalpages = await db.select({ count: count() }).from(posts)
    const totalblogs =  await db.select().from(posts)
    if(!isAdmin){
        throw error
    }

    return (
        <>
        <div className="my-4 text-2xl font-medium flex flex-row justify-between">
        Posts
        </div>
        {totalblogs.map((blog, index) => (
            <Card key={index} className="mb-4 group flex flex-row justify-between items-center h-14 px-6 shadow-md capitalize hover:scale-[1.001] transition">
            {blog.title}
            <div className="">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription className=" capitalize">
                                This action cannot be undone. This will permanently delete this category ({blog.title}) and it will also remove all posts related to this categorys
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <DeleteBtn2 postId={blog.id}/>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </Card>
        ))}
        </>
    )
}