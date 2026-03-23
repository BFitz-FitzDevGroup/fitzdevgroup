import { NextResponse } from 'next/server'

const KEY = process.env.INDEXNOW_KEY || ''
const HOST = 'fitzdevgroup.com'

export async function GET() {
  const res = await fetch(
    `https://api.indexnow.org/indexnow?url=https://${HOST}&key=${KEY}`,
    { method: 'GET' }
  )
  return NextResponse.json({ status: res.status })
}