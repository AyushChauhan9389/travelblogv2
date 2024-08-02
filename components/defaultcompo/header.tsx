import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import {ChevronRightIcon, MenuIcon, MountainIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator";

export default function Header() {
    return (
        <header className="sticky top-0 flex w-full shrink-0 items-center px-4 py-3 md:px-6 border-b z-50 bg-background">
            <Link href="#" className="mr-6 flex items-center" prefetch={false}>
                <MountainIcon className="h-6 w-6"/>
                <span className="sr-only">Acme Inc</span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            Home
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[400px] p-2">
                                <div className="flex flex-row justify-between items-center pt-2 pr-2 pb-2 pl-4">
                                    <div className="text-sm font-medium leading-none">Popular Categories</div>
                                    <Link href="/categories" className="text-sm font-medium leading-none hover:underline transition mr-4">
                                        See All
                                    </Link>

                                </div>

                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#"
                                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        prefetch={false}
                                    >
                                        <div
                                            className="text-sm font-medium leading-none group-hover:underline">Analytics
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Upgrade your reporting with advanced analytics.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[550px] grid-cols-2 p-2">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#"
                                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        prefetch={false}
                                    >
                                        <div className="text-sm font-medium leading-none group-hover:underline">Blog
                                            Posts
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Read our latest blog posts.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#"
                                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        prefetch={false}
                                    >
                                        <div className="text-sm font-medium leading-none group-hover:underline">Case
                                            Studies
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Read our customer case studies.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#"
                                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        prefetch={false}
                                    >
                                        <div
                                            className="text-sm font-medium leading-none group-hover:underline">Documentation
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Learn how to use our product.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#"
                                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        prefetch={false}
                                    >
                                        <div className="text-sm font-medium leading-none group-hover:underline">Help
                                            Center
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Get help with our product.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="#"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            Support
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href="/dashboard" className="ml-auto">
                <Button variant="outline" >Create Your Own Post</Button>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6"/>
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="#" className="flex items-center justify-center" prefetch={false}>
                        <MountainIcon className="h-6 w-6"/>
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6">
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            About
                        </Link>
                        <Collapsible className="grid gap-4">
                            <CollapsibleTrigger
                                className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                                Categories <ChevronRightIcon className="ml-auto h-5 w-5 transition-all"/>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="-mx-6 grid gap-6 bg-muted p-6">
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div
                                            className="text-sm font-medium leading-none group-hover:underline">Analytics
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Upgrade your reporting with advanced analytics.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div
                                            className="text-sm font-medium leading-none group-hover:underline">Developer
                                            Tools
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Extend your application with our developer tools.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">
                                            Security &amp; Compliance
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Keep your data secure with our security features.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div
                                            className="text-sm font-medium leading-none group-hover:underline">Scalability
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Scale your application with our infrastructure.
                                        </div>
                                    </Link>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Pricing
                        </Link>
                        <Collapsible className="grid gap-4">
                            <CollapsibleTrigger
                                className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                                Resources <ChevronRightIcon className="ml-auto h-5 w-5 transition-all"/>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="-mx-6 grid gap-6 bg-muted p-6">
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">Blog
                                            Posts
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Read our latest blog posts.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">Case
                                            Studies
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Read our customer case studies.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div
                                            className="text-sm font-medium leading-none group-hover:underline">Documentation
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Learn how to use our product.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1"
                                          prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">Help
                                            Center
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Get help with our product.
                                        </div>
                                    </Link>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}
