import { Harmattan } from "next/font/google"
import { list } from "postcss"

const { NextResponse } = require("next/server")

export async function GET(request){
return NextResponse.json({msg:"get method hit"})
}


