import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content){
    try {
        const { id } = await content.params;
        await mongoose.connect(connectionStr);
        const result = await foodSchema.find({ resto_id: id });
        return NextResponse.json({ result, success: true });
    } catch(err) {
        return NextResponse.json({ error: err.message });
    }
}

export async function DELETE(request,content){
    const id=content.params.id;
    let success=false;
    await mongoose.connect(connectionStr);
    const result= await foodSchema.deleteOne({ _id: id });
    if(result){
        success=true;
    }
    return NextResponse.json({ result,success });  
}
