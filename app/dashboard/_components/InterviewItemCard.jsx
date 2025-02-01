import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
    const router=useRouter()

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeeedback=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
    }

  return (
    <div className='cursor-pointer border border-orange-500 shadow-sm rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500 hover:outline-none'>
      <h3 className='text-xl font-sans font-semibold text-white'>{interview?.jobPosition}</h3>
      <h2 className='text-sm font-sans text-gray-400'>{interview?.jobExp} Years of Experience</h2>
      <h2 className='text-xs font-sans text-gray-200'>Created at: {interview?.createdAt}</h2>
      <div className='flex justify-between mt-5 gap-5'>
        <Button className="w-full"
        onClick={onFeeedback}
        >Feedback</Button>
        <Button className="w-full"
        onClick={onStart}
        >Start</Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
