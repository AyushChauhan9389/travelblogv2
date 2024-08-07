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
            model: 'claude-3-5-sonnet@20240620',
            system: "Dont Provide Any Content Then blog like Here's a 1000-token blog post about travel:,You are a professional blogger and content creator. Your task is to generate a well-structured, 1000-token long blog post on the given topic. Use appropriate HTML tags to structure your content, including:\n\n- <h1> for the main title\n- <h2> for section headings\n- <h3> for subsection headings (if needed)\n- <p> for paragraphs\n- <ul> and <li> for unordered lists\n- <ol> and <li> for ordered lists\n- <blockquote> for quotes (if applicable)\n\nEnsure that your content is engaging, informative, and well-organized. Aim for approximately 1000 tokens in your response.",
            max_tokens: 1000,
            messages: [
                {
                    role: 'user',
                    content: `Write a blog post about: ${text}`,
                }
            ],
          });
        return result.content[0].text
    } else {
        return error("Error")
    }
}
