import type {Metadata} from "next";
import Link from "next/link";
import {Bell, ChartColumnStacked, Home, LineChart, Menu, Package2, Search, Settings,} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {UserButton} from "@clerk/nextjs";
import {GoLocation} from "icons-react/all";
import adminControl from "@/lib/AdminControl";

export const metadata: Metadata = {
    title: "Travel Blog V2",
    description: "Next Gen Blogging Platform",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const isadmin = await adminControl()
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6"/>
                            <span className="">Travel Blog V2</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <Bell className="h-4 w-4"/>
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                            >
                                <Home className="h-4 w-4"/>
                                All Posts
                            </Link>
                            <Link
                                href="/dashboard/category"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                            >
                                <ChartColumnStacked className="h-4 w-4"/>
                                Request New Category
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted"
                            >
                                <GoLocation className="h-4 w-4"/>
                                Tags/Places
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                            >
                                <Settings className="h-4 w-4"/>
                                Settings
                            </Link>
                            <Link
                                href="#"
                                aria-disabled={true}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                            >
                                <LineChart className="h-4 w-4"/>
                                Analytics (Soon)
                            </Link>
                        </nav>
                    </div>
                    {isadmin && <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardContent className="p-2">
                                <Button size="sm" className="w-full">
                                    Admin Dashboard
                                </Button>
                            </CardContent>
                        </Card>
                    </div>}
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5"/>
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6"/>
                                    <span className="sr-only">Travel Blog V2</span>
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5"/>
                                    All Blogs
                                </Link>
                                <Link
                                    href="/dashboard/category"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                >
                                    <ChartColumnStacked className="h-5 w-5"/>
                                    Request New Category
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <GoLocation className="h-5 w-5"/>
                                    Tags/Places
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Settings className="h-5 w-5"/>
                                    Settings
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5"/>
                                    Analytics
                                </Link>
                            </nav>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get unlimited access to our
                                            support team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                                <Input
                                    type="search"
                                    placeholder="Search Blogs....."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>

                        </form>
                    </div>
                    <UserButton/>
                </header>
                {children}
            </div>
        </div>
    );
}
