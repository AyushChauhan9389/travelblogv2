import { db } from "@/app/db/db";
import { users } from "@/app/db/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function page() {
    const authors  = await db.select().from(users)
  return (
            <div className="flex px-6 py-4 bg-gray-100 rounded-lg">
                <div className="w-full ">
                <h1 className="py-2 px-2 text-2xl font-medium">
                    All Authors
                </h1>
                <div className="flex flex-col gap-3">
                {authors.map((author, index) => (
                    <Card className="flex justify-between py-2 px-2 w-full hover:scale-[1.005] transition items-center" key={index}>
                    {author.username}
                    <Link href={`/blog/${author.id}`}>
                    <Button>
                        See Posts
                    </Button>
                    </Link>
                </Card>
                ))}
                </div>
                </div>
            </div>
        )
}
