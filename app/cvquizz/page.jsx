'use client'
import React, { useEffect, useState } from 'react'
import json from '../../public/Assets/reponse.json';


const page = () => {
  const [index, setindex] = useState(0);
  const [question, setquestion] = useState(json.questions[index]);

  useEffect(() => {
    setquestion(json.questions[index]);
  }, [index])


  function reponse(reponse) {
   
    const res = fetch('/api/test')
   

    if (reponse === question.reponse) {
      alert("Correct")
    } else {
      alert("Incorrect")
    }
    setindex(index + 1);
  }
  return (
    <div>
      <div className="quizzBox w-200 m-auto h-100 rounded-2xl bg-white flex flex-col items-center mt-40">
        <p className='text-3xl text-black text-Rubik font-bold p-4'>{question.question}</p>
        <div className="reponses grid grid-cols-2 gap-3 m-auto">
          <div onClick={() => { reponse(0) }} className="border-1 w-[350px] h-20 rounded-2xl flex items-center justify-center text-Rubik font-bold hover:bg-gray-50 cursor-pointer">{question.options[0]}</div>
          <div onClick={() => { reponse(1) }} className="border-1 w-[350px] h-20 rounded-2xl flex items-center justify-center text-Rubik font-bold hover:bg-gray-50 cursor-pointer">{question.options[1]}</div>
          <div onClick={() => { reponse(2) }} className="border-1 w-[350px] h-20 rounded-2xl flex items-center justify-center text-Rubik font-bold hover:bg-gray-50 cursor-pointer">{question.options[2]}</div>
          <div onClick={() => { reponse(3) }} className="border-1 w-[350px] h-20 rounded-2xl flex items-center justify-center text-Rubik font-bold hover:bg-gray-50 cursor-pointer">{question.options[3]}</div>
        </div>
      </div>
    </div>
  )
}

export default page
