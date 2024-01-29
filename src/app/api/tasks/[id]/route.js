import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

//OBTENER
export async function GET(request, {params}) {

    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id),
        }
    })
    console.log(task)
    return NextResponse.json(task)
}

//UPDATE
export async function PUT(request, {params}) {
    const data = await request.json()
    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(taskUpdated)
}

//DELETE
export async function DELETE (request, {params}) {
     try {
         const taskRemoved = await prisma.task.delete({
             where: {
                 id: Number(params.id),
             }
         })
         return NextResponse.json(taskRemoved)
     } catch (error) {
        return NextResponse.json(error.message)
     }   
}
