"use client"
import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
    const{user}=useUser();
    const [interviewList,setInterviewList]=useState([])

    useEffect(()=>{
        GetInterviewList()
    },[user])

    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(MockMate)
        .where(eq(MockMate.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockMate.id))
        console.log(result)
        setInterviewList(result)
    }

  return (
    <div>
      <h4 className="text-white uppercase text-sm tracking-[4px] mb-5 mt-10">
      Previous mock interview
          </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
        {interviewList&&interviewList.map((interview,index)=>(
            <InterviewItemCard 
            interview={interview}
            key={index}/>
        ))}
      </div>
    </div>
  )
}

export default InterviewList
