import React from 'react'

function Card({arr}) {
  return (
    <div className='w-full bg-emerald-100 border-2 border-gray-500 rounded-lg p-5 break-inside-avoid mb-5'>
        <div>
            <img className='w-full object-cover h-52' src={`https://picsum.photos/200?random=${arr.id + 1}`} alt="Image" />
            <div className='py-3'>
                <span className='bg-slate-600 px-3 text-gray-100 rounded-sm ' >
                    {arr.userId}
                </span>
                <p className='text-lg text-[#333] font-bold py-1 leading-[18px]'>
                    {arr.title}
                </p>
                <p className='text-sm text-[#333] font-bold py-1 leading-[20px]'>
                    {arr.body}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card