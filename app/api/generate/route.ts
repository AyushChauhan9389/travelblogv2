import { AnthropicVertex } from '@anthropic-ai/vertex-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

import { NextRequest } from "next/server"

const projectId = 'i-agility-427221-j2';
const region = 'us-east5';

const client = new AnthropicVertex({
    projectId,
    region,
});
export const GET = async (req: NextRequest) =>{
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')
    

    if (text) {
        const result = await client.messages.create({
            model: 'claude-3-haiku@20240307',
            max_tokens: 1000,
            messages: [
              {
                role: 'user',
                content: text,
              },
            ],
          });
        return new Response(result.content[0].type)
    } else {
        return new Response("No text provided", { status: 400 })
    }
}
export const POST = async(req: NextRequest) =>{
    const body =  await req.json()

    return new Response(JSON.stringify(body))
}