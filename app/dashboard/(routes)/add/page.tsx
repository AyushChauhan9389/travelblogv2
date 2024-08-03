import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import ContentForm from "@/components/defaultcompo/content-form";
import {db} from "@/app/db/db";
import {categories} from "@/app/db/schema";

export default async function Addblog() {
    const category = await db.select().from(categories);
    return (
        <div className="px-6 py-4">
            <div className="flex flex-row justify-between items-center">
                <Breadcrumb className="hidden md:flex mt-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard" prefetch={false}>
                                    Dashboard
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Posts</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Add New</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Link href="/dashboard/add">
                    <Button className="mt-4">Add Blog</Button>
                </Link>
            </div>
            <div className="mt-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Add New Blog</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ContentForm categories={category}/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}