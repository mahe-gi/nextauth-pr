import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { log } from "node:console";

export async function GET() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    log("User session:", session);
    return NextResponse.json({
        name: session?.user?.name
    })
}