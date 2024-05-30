import React from 'react'

export default function Title({title}) {
  return (
    <div className='ic gap-2 text-secondary-700'>
        <span className='w-10 bg-secondary-500 h-1'></span>
        <h4 className='font-IranSans-Medium text-sm'>
            {title}
        </h4>
    </div>
  )
}
