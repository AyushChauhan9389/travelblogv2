'use client'

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
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Pagination, PaginationContent, PaginationItem, PaginationLink} from "@/components/ui/pagination";
import {NextButton, PrevButton} from "@/components/defaultcompo/prevnextpaginator";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {MoveHorizontalIcon} from "lucide-react";

export default function Dashboarderror(){
    return(
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
                <Card className="w-full">
                    <CardHeader className="flex flex-row justify-between">
                        <div className="space-y-2">
                            <CardTitle>All Posts</CardTitle>
                            <CardDescription>Manage your blog posts.</CardDescription>
                        </div>
                        <div>
                            <Pagination>
                                <PaginationContent>
                                    <PrevButton hasPrevPage={false}/>
                                        <PaginationItem>
                                            <PaginationLink href={`/dashboard`}>R</PaginationLink>
                                        </PaginationItem>
                                    <NextButton hasNextPage={false}/>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>

                                    <TableHead>
                                        <span className="">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}