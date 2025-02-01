import { Button } from '@/components/ui/button';
import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuesSection({ mockInterviewQues, activeQuestionIndex, setActiveQuestionIndex }) {  // Receive activeQuestionIndex and setActiveQuestionIndex as props

  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, Your browser does not support text to speech');
    }
  };

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex(index); // Use setActiveQuestionIndex to update index in StartInterview
  };

  return mockInterviewQues && (
    <div className='p-5 border border-orange-500 shadow-lg rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQues.map((question, index) => (
          <h2
            key={index}
            className={`p-2 bg-white rounded-full text-xs md:text-sm text-center cursor-pointer 
            ${activeQuestionIndex === index ? 'text-white bg-orange-500' : 'hover:bg-orange-500'}`}
            style={activeQuestionIndex === index ? { backgroundColor: '#f97316', color: 'black' } : {}}
            onClick={() => handleQuestionClick(index)} // Set active question on click
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      {activeQuestionIndex !== null && (
        <h2 className='my-5 text-md text-white md:text-lg'>
          {mockInterviewQues[activeQuestionIndex]?.question}
        </h2>
      )}
      <Volume2
        className='cursor-pointer text-white'
        onClick={() => textToSpeech(mockInterviewQues[activeQuestionIndex]?.question)}
      />
      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-blue-700'>
          <Lightbulb />
          <strong>NOTE:</strong>
        </h2>
        <h2 className='text-sm my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
  );
}

export default QuesSection;
