import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image"

export default function Cards() {
    return(
        <Card>
            <CardHeader>
                <Image
                    src="/placeholder.svg"
                    width={800}
                    height={500}
                    alt="Blog post thumbnail"
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                />
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Marketing
                </div>
                <h3 className="text-xl font-bold">10 Proven Strategies to Grow Your Email List</h3>
                <p className="text-muted-foreground">
                    Discover the most effective tactics for building a high-quality email list and engaging your
                    subscribers.
                </p>
            </CardContent>
            <CardFooter>
                <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    Read More
                </Link>
            </CardFooter>
        </Card>
    )
}