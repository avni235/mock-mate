"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockMate } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {
    const [interviewData, setInterviewData] = useState(null) // Initialize as null
    const [webCamEnabled, setWebCamEnabled] = useState(false)

    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails()
    }, [])

    /**used to get interview details by mockid/interviewid */
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockMate)
        .where(eq(MockMate.mockId, params.interviewId))
        setInterviewData(result[0])
    }

    return (
        <div className='my-10 '>
            <h2 className='font-bold text-2xl text-orange-500'>Let's Get Started</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col my-5 gap-5'>
                <div className='flex flex-col p-5 rounded-lg border gap-5'>
                {/* Conditional check to ensure interviewData is not null */}
                {interviewData ? (
                    <h2 className='text-lg text-white'><strong>Job Role/Job Position:</strong> {interviewData.jobPosition} </h2>
                ) : (
                    <h2>Loading interview details...</h2>
                )}
                {interviewData ? (
                    <h2 className='text-lg text-white'><strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc} </h2>
                ) : (
                    <h2></h2>
                )}
                {interviewData ? (
                    <h2 className='text-lg text-white'><strong>Years of Experience:</strong> {interviewData.jobExp} </h2>
                ) : (
                    <h2></h2>
                )}
                </div>
                <div className='p-5 border rounded-lg border-[#eb8f34] bg-[#eb8f34] bg-opacity-70'>
                    <h2 className='flex gap-2 items-center'><Lightbulb/><strong>Information</strong></h2>
                    <h2 className='mt-3'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                </div>
            </div>

            <div>
                {webCamEnabled ? (
                    <Webcam 
                        onUserMedia={() => setWebCamEnabled(true)} 
                        onUserMediaError={() => setWebCamEnabled(false)}
                        mirrored={true}
                        className='h-73 w-full'
                    />
                ) : (
                    <>
                        <WebcamIcon className='h-72 w-full my-7 p-20 text-white bg-primary rounded-lg'/>
                        <Button className="w-full" onClick={() => setWebCamEnabled(true)}>
                            Enable Web Cam and Microphone
                        </Button>
                    </>
                )}
            </div>
            </div>
            <div className='mt-2 flex justify-end items-end'>
                <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
                <Button>Start Interview</Button>
                </Link>
            </div>
        </div>
    )
}

export default Interview
