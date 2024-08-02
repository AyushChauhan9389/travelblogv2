import {db} from "@/app/db/db";
import {categories, posts, users, comments} from "@/app/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {Separator} from "@/components/ui/separator";
import AddForm from "@/components/defaultcompo/commentform";
import {Singleblog, SkeletonBlog} from "@/components/defaultcompo/singleblog";
import {Suspense} from "react";

export default async function BlogPage({ params }: { params: { slug: string } }) {
    return (
        <>
            <Suspense fallback={<SkeletonBlog/>}>
            <Singleblog slug={params.slug}/>
            </Suspense>

        </>
    )

}