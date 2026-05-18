import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await mongoose.connect(connectionStr)
        
        const data = await restaurantSchema.find()
        console.log(data);
        return NextResponse.json({result:data})
    } catch(err) {
        console.error("DB Error:", err)
        return NextResponse.json({error: err.message}, {status: 500})
    }
}

export async function POST(request){
    let payload = await request.json();
    await mongoose.connect(connectionStr)
    const restaurant= new restaurantSchema(payload)
    const result=restaurant.save()

    return NextResponse.json({result,success:true})    
}