'use client'

import { useEffect, useState } from 'react'

import Editor from '@/components/editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createBlogAction } from '@/lib/actions'
import { toast } from 'sonner'
import {blogschema} from '@/lib/zodschema'
import {uploadImage} from "@/lib/uploader";
import {useAction} from "next-safe-action/hooks";

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

export default function ContentForm() {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState<string>('')
    const [image, setImage] = useState<File>()
    const {execute, result, status} = useAction(createBlogAction,{
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
            throw new Error('Image is required')
        }
        const headerimageurl = await uploadImage(file)
        execute({title, slug, content, headerimageurl})

    }

    return (
        <div className='mt-6 flex w-full flex-col gap-4'>
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
                    required={true}
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

            <Editor initialValue={defaultValue} onChange={setContent} />
            <Button onClick={handleSubmit} disabled={status === 'executing'}>
                {status === 'executing' ? 'Submitting...' : 'Create'}
            </Button>

        </div>
    )
}
