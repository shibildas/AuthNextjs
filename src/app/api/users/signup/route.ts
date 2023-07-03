import { connect } from "@/db/dbConfig";
import User from '@/models/userModel';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
connect()


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, email, password } = body
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    } else {
      const salt = await bcryptjs.genSalt(10)
      const hashedPassword = await bcryptjs.hash(password, salt)
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      })
      const savedUser = await newUser.save()
      return NextResponse.json({ message: 'User created Success', success: true, result: savedUser }, { status: 201 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}