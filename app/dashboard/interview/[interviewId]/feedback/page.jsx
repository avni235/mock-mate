"use client"
import { db } from '@/utils/db'
import { FinalUserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { twMerge } from "tailwind-merge";
  
function Feedback({params}) {
    const [feedbackList,setFeedbackList]=useState([])
    const router= useRouter()

    useEffect(()=>{
            GetFeedback()
    },[])
    const GetFeedback=async()=>{
        const result=await db.select()
        .from(FinalUserAnswer)
        .where(eq(FinalUserAnswer.mockIdRef,params.interviewId))
        .orderBy(FinalUserAnswer.id)
        console.log(result)
        setFeedbackList(result)
    }

  return (
    <div className='p-10'>
      <TitleBanner
        subtitle="Receive Detailed Insights"
        title="Feedback"
      />
      {feedbackList?.length==0?
      <h2 className='font-medium text-xl text-gray-500 mb-6'>No Interview Feedback Record Found</h2>
      :<>
      <h2 className='font-bold text-white text-2xl'>Here is your interview Feedback</h2>
      <h2 className='text-md text-gray-400'>Find below interview question with correct answer, your answer and feedback for improvement</h2>
      {feedbackList&&feedbackList.map((item,index)=>(
        <Collapsible key={index} className='mt-7 mb-7'>
        <CollapsibleTrigger className='p-2 w-full flex justify-between bg-primary text-white rounded-lg my-2 text-left gap-7'>
        {item.question}<ChevronsDown className='h-5 text-white w-5'/>
        </CollapsibleTrigger>
        <CollapsibleContent>
        <div className=''>
            <h2 className='text-white/80 p-2'><strong>Rating:</strong>{item.rating}</h2>
            <h2 className='p-2   text-sm text-white/80'><strong>Your Answer: </strong>{item.userAns}</h2>
            <h2 className='p-2    text-sm text-white/80'><strong>Correct Answer: </strong>{item.correctAns}</h2>
            <h2 className='p-2    text-sm text-white/80'><strong>Feedback: </strong>{item.feedback}</h2>
            </div>
        </CollapsibleContent>
      </Collapsible>      
      ))}
      </>}
      <div className='flex justify-start mt-4'>
  <Button onClick={() => router.replace('/dashboard')}>Go Home</Button>
</div>
    </div>
  )
  
}
const TitleBanner = ({ subtitle, title, className }) => {
  return (
    <div
      className={twMerge(
        "w-full mx-auto bg-reactBd-titleBg  bg-fill bg-center py-10 mdl:py-20",
        className
      )}
    >
      <div className="max-w-screen-2xl mx-auto text-center flex flex-col items-center justify-center">
        <h4 className="text-orange-500 uppercase text-xs mdl:text-sm tracking-[4px] mb-2">
          {subtitle}
        </h4>
        <h1 className="font-titleFont text-white text-4xl mdl:text-6xl font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Feedback
