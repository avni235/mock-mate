"use client"
import { db } from '@/utils/db'
import { MockMate } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import QuesSection from './_components/QuesSection'
import RecordAnsSection from './_components/RecordAnsSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function StartInterview({ params }) {
    const [interviewData, setInterviewData] = useState()
    const [mockInterviewQues, setMockInterviewQues] = useState()
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    
    useEffect(() => {
        GetInterviewDetails()
    }, [])
    
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockMate)
            .where(eq(MockMate.mockId, params.interviewId))
        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        setMockInterviewQues(jsonMockResp)
        setInterviewData(result[0])
    }
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Questions */}
                <QuesSection 
                    mockInterviewQues={mockInterviewQues}
                    activeQuestionIndex={activeQuestionIndex}
                    setActiveQuestionIndex={setActiveQuestionIndex}  // Pass setActiveQuestionIndex
                />
                {/* Video/ audio */}
                <RecordAnsSection
                    mockInterviewQues={mockInterviewQues}
                    activeQuestionIndex={activeQuestionIndex}
                    interviewData={interviewData}
                />
            </div>
            <div className='flex justify-end gap-6'>
                {activeQuestionIndex > 0 && (
                    <Button onClick={() => setActiveQuestionIndex(prevIndex => prevIndex - 1)}>Previous Question</Button>
                )}
                {activeQuestionIndex !== mockInterviewQues?.length - 1 && (
                    <Button onClick={() => setActiveQuestionIndex(prevIndex => prevIndex + 1)}>Next Question</Button>
                )}
                {activeQuestionIndex === mockInterviewQues?.length - 1 && (
                    <Link href={'/dashboard/interview/' + interviewData?.mockId + '/feedback'}>
                        <Button>End Interview</Button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default StartInterview
