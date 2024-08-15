import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full sm:h-screen bg-[#262626] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-5xl font-bold inline text-white pb-4'>Contact</p>
                <p className='text-white py-4s'>Send me a message</p>
            </div>
            <input 
  className='bg-[#333333] outline-none border-[1px] border-white focus:border-[1px] focus:border-[#9D9D9D] rounded-md p-2 text-white' 
  type="text" 
  placeholder='Name' 
  name='name' 
/>
<input 
  className='my-4 p-2 bg-[#333333] outline-none border-[1px] border-white focus:border-[1px] focus:border-[#9D9D9D] target:border-red rounded-md text-white' 
  type="email" 
  placeholder='Email' 
  name='email' 
/>
<textarea 
  className='bg-[#333333] outline-none border-[1px] border-white focus:border-[1px] focus:border-[#9D9D9D] rounded-md p-2 text-white' 
  name="message" 
  rows="4" 
  placeholder='Message'
></textarea>


            <button className='text-white rounded-md text-xl font-medium bg-[#9D9D9D] hover:bg-[#9ACD32] px-7 py-4 my-8 mx-auto flex items-center'>Let's Connect</button>
        </div>
    </div>
  )
}
export default Contact