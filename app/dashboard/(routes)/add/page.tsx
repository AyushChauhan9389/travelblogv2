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

export default function Addblog(){
    return(
        <div className="px-6 py-4">
            <h1 className="text-3xl font-sans font-bold"></h1>
                <div className="flex flex-row justify-between items-center">
                    <Breadcrumb className="hidden md:flex mt-3">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#" prefetch={false}>
                                        Dashboard
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Posts</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
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
                            <ContentForm />
                        </CardContent>
                    </Card>
                </div>
        </div>
    )
}