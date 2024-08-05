import { db } from "@/app/db/db";
import { categories } from "@/app/db/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Delete, Trash } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import DeleteBtn3 from "@/components/defaultcompo/DeleteCat";
export default async function CategoryPage() {
    const categorydata = await (await db.select().from(categories))
    return (
        <>
        <div className="my-4 text-2xl font-medium flex flex-row justify-between">
        Categories
        <Button variant="outline" className="ml-4">Add Category</Button>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categorydata.map((category, index) => (
                    <Card key={index} className="group flex flex-row justify-between items-center h-14 px-6 shadow-md capitalize hover:scale-[1.01] transition">
                        {category.name}
                        <div className="">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline">Delete</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription className=" capitalize">
                                            This action cannot be undone. This will permanently delete this category ({category.name}) and it will also remove all posts related to this categorys
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <DeleteBtn3 categoryId={category.id}/>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}