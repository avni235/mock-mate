"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { MockMate } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'
  
function AddNewInterview() {
    const [openDialog, setOpenDialog]= useState(false)
    const [jobPosition,setJobPosition]= useState()
    const [jobDesc,setJobDesc]= useState()
    const [jobExp,setJobExp]= useState()
    const [loading,setLoading]= useState(false)
    const [jsonResponse, setJsonResponse]= useState([])
    const router = useRouter()
    const {user} = useUser();

    const onSubmit=async(e)=>{
      setLoading(true)
        e.preventDefault()
        console.log(jobPosition,jobDesc,jobExp)

        const InputPrompt="Job position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience: "+jobExp+", Based on this give 5 interview questions along with answers in json.Don't have any text in bold"
        const result=await chatSession.sendMessage(InputPrompt)
        const MockJsonResp = (result.response.text()).replace('```json',' ').replace('```',' ')
        console.log(JSON.parse(MockJsonResp))
        setJsonResponse(MockJsonResp)
        if(MockJsonResp){
        const resp = await db.insert(MockMate)
        .values({
          mockId:uuidv4(),
          jsonMockResp:MockJsonResp,
          jobPosition:jobPosition,
          jobDesc:jobDesc,
          jobExp:jobExp,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockMate.mockId})
        console.log("Inserted ID:",resp)
        if(resp){
          setOpenDialog(false)
          router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
      }
      else{
        console.log("ERROR")
      }
        setLoading(false)
    }

  return (
    <div>
      <div className='p-10 bg-orange-500 shadow-sm rounded-lg hover:scale-105 hover:shadow-md cursor-pointer transition-all'
      onClick={()=>setOpenDialog(true)}>
        <h2 className='text-center text-xl font-sans font-semibold text-white'>+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
  <DialogContent className="max-w-2xl">
    <DialogHeader>
      <DialogTitle className="text-2xl text-orange-500">Tell us more about the Job you are Interviewing</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
        <div>
            <h2 className='text-gray-100'>Add details about Job Position/role, Job Description and Year of Experience</h2>
            <div className='mt-7 text-gray-200 my-3'>
                <label>Job Position/Role</label>
                <Input className="text-gray-250" placeholder="Ex. Full Stack Developer" required
                onChange={(event)=>setJobPosition(event.target.value)}
                />
            </div>
            <div className='my-3 text-gray-200'>
                <label>Job Description/Tech Stack</label>
                <Textarea className="text-gray-250" placeholder="Ex. React, Mongo, Express etc" required
                onChange={(event)=>setJobDesc(event.target.value)}
                />
            </div>
            <div className='my-3 text-gray-200'>
                <label>Years of Experience</label>
                <Input className="text-gray-250" placeholder="Ex. 5" type="number" max="50" required
                onChange={(event)=>setJobExp(event.target.value)}
                />
            </div>
        </div>
        <div className='flex gap-5 justify-end'>
            <Button type="button"
            onClick={()=>setOpenDialog(false)}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading?
              <>
            <LoaderCircle className='animate-spin'/></>:'Start Interview' 
            }</Button>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
