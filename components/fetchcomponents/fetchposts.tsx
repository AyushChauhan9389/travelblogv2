import {TableCell, TableFooter, TableHead, TableHeader, TableRow,Table, TableBody,} from "@/components/ui/table";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoveHorizontalIcon} from "lucide-react";
import {categories, posts} from "@/app/db/schema";
import {db} from "@/app/db/db";
import {count, eq} from "drizzle-orm";
import getuserid from "@/lib/getuserid";
import { Skeleton } from "@/components/ui/skeleton"
import {Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis} from "@/components/ui/pagination";
import {Card ,CardDescription, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {PrevButton, NextButton} from "@/components/defaultcompo/prevnextpaginator";
import paginationItem from "@/components/defaultcompo/paginationItem";
import PaginationItem1 from "@/components/defaultcompo/paginationItem";
import {Suspense} from "react";
export async function SkeletonFetchPost(){
    return(
        <>
        <Card className="w-full">
            <CardHeader className="flex flex-row justify-between">
                <div className="space-y-2">
                    <CardTitle>All Posts</CardTitle>
                    <CardDescription>Manage your blog posts.</CardDescription>
                </div>
                <div>
                    <Pagination>
                        <PaginationContent>
                            <Skeleton className="w-[300px] h-[40px]" />
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
        <TableRow >
            <TableCell className="font-medium">
                <Link href="#" className="hover:underline" prefetch={false}>
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </Link>
            </TableCell>
            <TableCell className="hidden sm:table-cell"><Skeleton className="w-[100px] h-[20px] rounded-full" /></TableCell>
            <TableCell className="hidden sm:table-cell">
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <Skeleton className="w-[40px] h-[40px] rounded-lg" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </TableCell>
        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        </>
    )
}
type paginationprops = {
    pagedata: number,
    per_pagedata: number,
    dataend: number,
    url: string
}
export async function Fetchposts( {pagedata, per_pagedata, dataend, url}: paginationprops){
    const currentuser = await getuserid()
    if (!currentuser) return null;
    const toalpages = await db.select({ count: count() }).from(posts).where(eq(posts.authorId, currentuser))
    function gettotalpages(){
        if(toalpages[0].count > 5){
            const numberofPages = Math.ceil(toalpages[0].count / per_pagedata)
            return numberofPages
        }else {
            const numberofPages = 1;
            return numberofPages
        }
    }
    const data = gettotalpages()
    const hasPrevPage = pagedata > 0;
    const hasNextPage = pagedata < data - 1;
    return(
        <>
            <Card className="w-full">
                <CardHeader className="flex flex-row justify-between">
                    <div className="space-y-2">
                        <CardTitle>All Posts</CardTitle>
                        <CardDescription>Manage your blog posts.</CardDescription>
                    </div>
                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem1 data={data} url={url}/>
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
                        <Suspense fallback={<SkeleFetch />}>
                            <Fetchdata pagedata={pagedata} per_pagedata={per_pagedata} url={url}/>
                        </Suspense>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}
export async function FetchCategories( {pagedata, per_pagedata, dataend, url}: paginationprops){
    const currentuser = await getuserid()
    if (!currentuser) return null;
    const toalpages = await db.select({ count: count() }).from(categories)
    const usercategories = await db.select().from(categories).offset(pagedata).limit(per_pagedata)
    function gettotalpages(){
        if(toalpages[0].count > 5){
            const numberofPages = Math.ceil(toalpages[0].count / per_pagedata)
            return numberofPages
        }else {
            const numberofPages = 1;
            return numberofPages
        }
    }
    const data = gettotalpages()
    const hasPrevPage = pagedata > 0;
    const hasNextPage = pagedata < data - 1;
    return(
        <>
            <Card className="w-full">
                <CardHeader className="flex flex-row justify-between">
                    <div className="space-y-2">
                        <CardTitle>All Posts</CardTitle>
                        <CardDescription>Manage your blog posts.</CardDescription>
                    </div>
                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem1 data={data} url={url}/>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead className="hidden sm:table-cell">Description</TableHead>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>

                                <TableHead>
                                    <span className="">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {usercategories.map((blog, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            {usercategories[index].name}
                                        </Link>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">{usercategories[index].description}</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant="secondary">Active</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}

type fetchdata = {
    pagedata: number,
    per_pagedata: number,
    url: string
}
export async function Fetchdata({pagedata, per_pagedata, url}: fetchdata){
    const currentuser = await getuserid()
    if (!currentuser) return null;
    const userblogs = await db.select().from(posts).where(eq(posts.authorId, currentuser)).offset(pagedata).limit(per_pagedata)
    return (
        <TableBody>
            {userblogs.map((blog, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            {userblogs[index].title}
                        </Link>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{`${userblogs[index].createdAt.getUTCDate()}-${userblogs[index].createdAt.getUTCMonth() + 1}-${userblogs[index].createdAt.getUTCFullYear()}`}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                        {userblogs[index].ispublished? <Badge variant="secondary">Published</Badge> : <Badge variant="destructive">Not Published</Badge>}
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoveHorizontalIcon className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Set to {userblogs[index].ispublished? 'published':'not published'}</DropdownMenuItem>
                                <Link href={`${url}/edit/${userblogs[index].id}`}>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export function SkeleFetch(){
    return(
        <TableBody>
                <TableRow >
                    <TableCell className="font-medium">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            <Skeleton className="w-[200px] h-[30px]"/>
                        </Link>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell"><Skeleton className="w-[200px] h-[30px]"/></TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <Skeleton className="w-[200px] h-[30px]"/>
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Skeleton className="w-[200px] h-[30px]"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <Skeleton className="w-[200px] h-[30px]"/>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
        </TableBody>
    )
}