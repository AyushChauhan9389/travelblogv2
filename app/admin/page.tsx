import adminControl from "@/lib/AdminControl";
import {error} from "console";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {db} from "@/app/db/db";
import {count} from "drizzle-orm";
import {posts, users} from "@/app/db/schema";

export default async function AdminPage(){
    const isAdmin = await adminControl()
    const toalpages = await db.select({ count: count() }).from(posts)
    const totalusers = await db.select({ count: count() }).from(users)
    if(!isAdmin){
        throw error
    }
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4">
            <main className="container grid gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3 sm:px-6 sm:py-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Posts</CardTitle>
                        <CardDescription>All published blog posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">{toalpages[0].count}</div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>+12% from last month</span>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Users</CardTitle>
                        <CardDescription>All registered users</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">{totalusers[0].count}</div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>+5% from last month</span>
                        </div>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}