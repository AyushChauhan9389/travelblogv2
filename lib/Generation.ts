import { AnthropicVertex } from '@anthropic-ai/vertex-sdk';
import { error } from 'console';

const projectId = 'i-agility-427221-j2';
const region = 'us-east5';

const client = new AnthropicVertex({
    projectId,
    region,
});

export default async function Generation(text:string) {
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
        return JSON.stringify(result, null, 2)
    } else {
        return error("Error")
    }
}
