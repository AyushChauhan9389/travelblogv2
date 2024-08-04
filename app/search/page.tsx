import {Input} from "@/components/ui/input";
import Link from "next/link";
import {CalendarIcon, UserIcon, X} from "lucide-react";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {MainSearchClient} from "@/components/defaultcompo/SearchClient";
import SearchResult from "@/lib/Search";
import {db} from "@/app/db/db";
import {categories, posts} from "@/app/db/schema";
import {sql} from "drizzle-orm";

export default async function SearchPage({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const query = searchParams['q'] ?? '';
    const results = await db.select({
        id: posts.id,
        title: posts.title,
        description: posts.description,
        slug: posts.slug,
        categoryId: posts.categoryId
    }).from(posts)
        .where(sql`(
      setweight(to_tsvector('english', ${posts.title}), 'A') ||
      setweight(to_tsvector('english', ${posts.description}), 'B'))
      @@ to_tsquery('english', ${query}
    )`
        );
    const categoryresults = await db.select({
        id: categories.id,
        title: categories.name,
        description: categories.description,
    }).from(categories)
        .where(sql`(
      setweight(to_tsvector('english', ${categories.name}), 'A') ||
      setweight(to_tsvector('english', ${categories.description}), 'B'))
      @@ to_tsquery('english', ${query}
    )`
        );
    return (
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <div className="flex flex-row justify-between items-center">
                <div className="mb-8 w-full">
                    <MainSearchClient/>
                </div>
                <Link href='/'>
                    <X className="w-8 h-8 hover:border rounded-lg transition" />
                </Link>
            </div>
            <h1 className="mt-4 capitalize text-3xl font-bold mb-6">
            blogs
            </h1>
            {results.length === 0 ? (
                <div className="text-center text-muted-foreground">
                    No Blogs Were Found
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {results.map((result, index) => (
                        <div key={index}
                             className="rounded-lg bg-background p-4 shadow-md transition-all hover:bg-muted">
                            <Link href={`/blog/${result.slug}`} className="block" prefetch={false}>
                                <h3 className="mb-2 text-lg font-semibold text-foreground">{result.title}</h3>
                                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                                    {result.description}
                                </p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                    <div className="mr-2">
                                        <UserIcon className="mr-1 inline-block h-4 w-4"/>
                                        John Doe
                                    </div>
                                    <div>
                                        <CalendarIcon className="mr-1 inline-block h-4 w-4"/>
                                        August 24, 2023
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            <h1 className="mt-4 capitalize text-3xl font-bold mb-6">
                Categories
            </h1>
            {categoryresults.length === 0 ? (
                <div className="text-center text-muted-foreground">
                    No Categories Were Found
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categoryresults.map((result, index) => (
                        <div key={index}
                             className="rounded-lg bg-background p-4 shadow-md transition-all hover:bg-muted">
                            <Link href={`/category/${result.id}`} className="block" prefetch={false}>
                                <h3 className="mb-2 text-lg font-semibold text-foreground">{result.title}</h3>
                                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                                    {result.description}
                                </p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                    <div className="mr-2">
                                        <UserIcon className="mr-1 inline-block h-4 w-4"/>
                                        John Doe
                                    </div>
                                    <div>
                                        <CalendarIcon className="mr-1 inline-block h-4 w-4"/>
                                        August 24, 2023
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-8 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#"/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}