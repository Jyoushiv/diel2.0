import { NotionAPI } from 'notion-client'
import { Client } from '@notionhq/client'

// For the unofficial Notion API (used for rendering)
export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  authToken: process.env.NOTION_TOKEN
})

// For the official Notion API (used for integration)
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN
})
