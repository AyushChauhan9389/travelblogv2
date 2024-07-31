'use client';

import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from 'zod';
import { blogschema } from '@/lib/zodschema'
import {toast} from 'sonner';
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import Editor from "@/components/editor";
export const defaultValue = {
    type: 'doc',
    content: [
        {
            type: 'paragraph',
            content: [
                {
                    type: 'text',
                    text: 'Type "/" for commands or start writing...'
                }
            ]
        }
    ]
}


export default function BlogForm(){
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState<string>('')
    const [imageurl, setImageUrl] = useState('')
    useEffect(() => {
        const name = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '')

        setSlug(name)
    }, [title])


    const form = useForm<z.infer<typeof blogschema>>({
        resolver: zodResolver(blogschema),
        defaultValues: {
            title: '',
            headerimageurl: '',
            slug: '',
            content: '',
            image: undefined
        },
    });
    const onupload = (file: File) => {
        setImageUrl(URL.createObjectURL(file))
    }
    function onSubmit(values: z.infer<typeof blogschema>) {
        console.log(values)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">

                <div className="flex flex-row gap-4 w-full">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} className="w-full" value={title}
                                           onChange={e => setTitle(e.target.value)}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="slug"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Slug</FormLabel>
                                <FormControl>
                                    <Input {...field} className="w-full" value={slug}
                                           onChange={e => setSlug(e.target.value)}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-row gap-4 w-full">
                    <FormField
                        control={form.control}
                        name="headerimageurl"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Url</FormLabel>
                                <FormControl>
                                    <Input {...field} value={imageurl}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Main Image</FormLabel>
                                <FormControl>
                                    <Input {...field} type="file"
                                           accept="image/*"
                                    onChange={(e) => { // @ts-ignore
                                        onupload(e.target.files[0])}}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-12">
                    <Editor initialValue={defaultValue} onChange={setContent} />
                </div>
                    <Button className="w-full mt-4" type="submit">Submit</Button>
            </form>
        </Form>
)
}