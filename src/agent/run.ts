import 'dotenv/config'
import { generateText, type ModelMessage} from 'ai'
import { openai } from '@ai-sdk/openai'
import { SYSTEM_PROMPT } from './system/prompt'
import type { AgentCallbacks } from '../types'

const model = 'gpt-5-mini'

export const runAgent = async (
  userMessage: string,
  conversationHistory: ModelMessage[],
  callbacks: AgentCallbacks
) => {

  const {text} = await generateText({
    model: openai(model),
    prompt: userMessage,
    system: SYSTEM_PROMPT
  })

  console.log(text)

}

runAgent('who want the 2025 nba finals?')