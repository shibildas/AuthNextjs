import { connect } from "@/db/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {token}= reqBody

        const user=await User.findOne({verifyToken:token,
        verifyTokenExpiry:{$gt:Date.now()}})
        if(!user){
            return NextResponse.json({error:"Invalid token"},{status:400})
        }
        user.isVerified=true
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined
        const savedUser=await user.save()
        
        return NextResponse.json({
            message:"Email sent successfully",
            success:true
        })

        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})     
    }
}