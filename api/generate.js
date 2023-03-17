import { OpenAIStream } from '../utils/OpenAIStream'

export const config = {
  runtime: 'edge',
}

const handler = async (req) => {
  const { bio, jobDescription } = await req.json()

  const prompt = `
    Given the current resume profile, ${bio}, generate an improved resume 
    profile based on the job description,
    ${jobDescription}. If the resume profile mentions fewer years of experience than the 
    job description asks for, then only use the number of years of experience from the resume profile.
  `

  const payload = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)

  return new Response(stream)
}

export default handler
