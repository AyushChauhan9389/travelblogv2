'use client'

import {useEffect, useState} from 'react'

import Editor from '@/components/editor'
import editor from '@/components/editor'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {createBlogAction, saveBlogAction} from '@/lib/actions'
import {toast} from 'sonner'
import {uploadImage} from "@/lib/uploader";
import {useAction} from "next-safe-action/hooks";
import {generateJSON} from "@tiptap/html";
import {
    AIHighlight,
    HorizontalRule,
    Placeholder,
    StarterKit,
    TaskItem,
    TaskList,
    TiptapImage,
    TiptapLink,
    UpdatedImage
} from "novel/extensions";
import {JSONContent} from "novel";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

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
type editor = {
    contentset: string
    slugset: string
    titleset: string
    idset: number
}
export default function EditContentForm({contentset, slugset, titleset, idset}: editor) {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [json, setJson] = useState<JSONContent>()
    const [content, setContent] = useState<string>('')
    const [image, setImage] = useState<File>()
    const [preview, setPreview] = useState(true )
    const {execute, result, status} = useAction(saveBlogAction,{
        onSuccess: ({data}) => {
            if (data?.failure){
                toast.error(data.failure)
            }
            if (data?.success){
                toast.success(data.success)
            }
        },
        onError: (error) => {
            toast.error("failed")
        }
    })
    function datasetter(){

        return generateJSON(contentset, [
            TiptapImage,
            TiptapLink,
            UpdatedImage,
            TaskList,
            TaskItem,
            HorizontalRule,
            StarterKit,
            Placeholder,
            AIHighlight
        ])
    }
    useEffect(() => {
        setTitle(titleset)
        setSlug(slugset)
        setContent(contentset)
    }, []);

    useEffect(() => {
        const name = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '')

        setSlug(name)
    }, [title])


    async function handleSubmit() {


        const file = image
        if (!file) {
            toast.error('Image is required')
            execute({title, slug, content, blogid: idset})
        }else {
            const headerimageurl = await uploadImage(file)
            execute({title, slug, content, blogid: idset , headerimageurl})
        }



    }

    return (
        <div className='flex flex-row gap-5'>
            <div className="w-full">
                <CardHeader>
                    <CardTitle className="flex flex-row justify-between">
                        <p>Edit Blog</p>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <Switch checked={preview} onCheckedChange={
                                (checked) => {
                                    setPreview(checked)
                                }
                            } id="airplane-mode"/>
                            <Label htmlFor="airplane-mode" className="text-xl">Preview</Label>
                        </div>
                    </CardTitle>

                </CardHeader>
                <CardContent>
                    <div className="mt-6 flex w-full flex-col gap-4">
                        <div className='flex gap-4'>
                            <Input
                                required={true}
                                type='text'
                                placeholder='Title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Input
                                required={true}
                                type='text'
                                placeholder='Slug'
                                value={slug}
                                onChange={e => setSlug(e.target.value)}
                            />
                            <Input
                                type='file'
                                name='Image'
                                accept="image/*"
                                placeholder='Image'
                                onChange={event => {
                                    if (event.target.files) {
                                        setImage(event.target.files[0])
                                    }
                                }}
                            />

                        </div>

                        <Editor initialValue={datasetter()} onChange={setContent}/>
                        <Button onClick={handleSubmit} disabled={status === 'executing'}>
                            {status === 'executing' ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                    <div className="w-full">

                    </div>
                </CardContent>
            </div>
            {preview &&
                <div className="w-full p-6 flex flex-col gap-8">
                <CardHeader className="w-full p-0 pb-5">
                    <CardTitle>
                        <p>Preview</p>
                    </CardTitle>

                </CardHeader>
                    <Input
                        disabled={true}
                        className="h-10"
                        type='text'
                        placeholder='Slug'
                        value={"http://localhost:3000/blog/" + slug}
                        onChange={e => setSlug(e.target.value)}
                    />
                <Card>

                    <CardContent>

                        <div dangerouslySetInnerHTML={{__html: content}} className="prose mt-4"></div>
                    </CardContent>
                </Card>
            </div>}
        </div>
    )
}
