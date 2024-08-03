import Link from "next/link"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {currentUser} from "@clerk/nextjs/server";
import {Fetchposts, SkeletonFetchPost} from "@/components/fetchcomponents/fetchposts";
import {Suspense} from "react";


export default async function Dashboard({searchParams}: { searchParams:{[key: string]:string|string[]|undefined}  }) {
    const page = searchParams['page'] ?? 1;
    const per_page = searchParams['per_page'] ?? 5;
    const per_page_options = Number(per_page)
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const url ='/dashboard'
    return (
        <main className="px-6 py-4">
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
                    </BreadcrumbList>
                </Breadcrumb>
                <Link href="/dashboard/add">
                    <Button className="mt-4">Add Blog</Button>
                </Link>
            </div>
            <div className="mt-4">
                                <Suspense fallback={<SkeletonFetchPost/>}>
                                    <Fetchposts pagedata={start} per_pagedata={per_page_options} dataend={end} url={url}/>
                                </Suspense>
            </div>
        </main>
    )
}
