import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Suspense} from "react";
import {Fetchposts, SkeletonFetchPost} from "@/components/fetchcomponents/fetchposts";
import {FetchCategories} from "@/components/fetchcomponents/fetchposts";

export default function CategoryPage({searchParams}: { searchParams:{[key: string]:string|string[]|undefined}  }){
    const page = searchParams['page'] ?? 1;
    const per_page = searchParams['per_page'] ?? 5;
    const per_page_options = Number(per_page)
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const url ='/dashboard/category'
    return(
        <div className="px-6 py-4">
            <div className="flex flex-row justify-between items-center">
                <Breadcrumb className="hidden md:flex mt-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/category" prefetch={false}>
                                    Category
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

            </div>
            <div className="mt-4">
                <Suspense fallback={<SkeletonFetchPost/>}>
                    <FetchCategories  pagedata={start} per_pagedata={per_page_options} dataend={end} url={url}/>
                </Suspense>
            </div>
        </div>
    )
}