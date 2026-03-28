import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";

const HARVARD_API_KEY = process.env.HARVARD_API_KEY;

export async function GET(request:Request): Promise<NextResponse>{

    const {searchParams} = new URL(request.url);

    const search = searchParams.get("search");

    if(!search){
        return NextResponse.json({error: "No search provided"}, {status:400});
    }

    const res = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&q=${search}&size=20&hasimage=1`,
        { signal: AbortSignal.timeout(10000) }
    );

    if(res.status !== 200){
        return NextResponse.json({error: "error"});
    }

    const data = await res.json();

    return NextResponse.json(data);
}
