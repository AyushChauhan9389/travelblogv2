import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu, MoveHorizontalIcon,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {currentUser} from "@clerk/nextjs/server";

export default async function Dashboard() {
    const user = await currentUser()
    const currentuserid = user?.id.toString();
    return (
        <main className="px-6 py-4">
            {currentuserid}
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
                    <CardHeader>
                        <CardTitle>All Posts</CardTitle>
                        <CardDescription>Manage your blog posts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                                    <TableHead>
                                        <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Future of Web Development
                                        </Link>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">2023-04-15</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant="secondary">Published</Badge>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Rise of Artificial Intelligence
                                        </Link>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">2023-03-28</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant="outline">Draft</Badge>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Importance of Accessibility in Web Design
                                        </Link>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">2023-02-10</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant="secondary">Published</Badge>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Evolution of JavaScript Frameworks
                                        </Link>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">2023-01-05</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant="outline">Draft</Badge>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Future of Responsive Design
                                        </Link>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">2022-12-20</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant="secondary">Published</Badge>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
