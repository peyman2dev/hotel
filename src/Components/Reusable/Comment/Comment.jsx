import { QuoteUp } from 'iconsax-react'
import React from 'react'

export default function Comment() {
  return (
    <article className='center flex-col gap-5 w-[384px] bg-white p-8 rounded-xl'>

        <QuoteUp variant='Bold' className='text-gray-200' size={42}/>

<div className="text-center">
    <p className='font-IranSans-Light tracking-tight line-clamp-5'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
    </p>
</div>
<div className="mt-8 ic justify-start w-full gap-4">
  <img src="/public/images/icons/user1.png" alt="" />
  <div>
    <p>
      ندا صابری
    </p>
    <p className="text-sm font-IranSans-Light text-zinc-500">
    مدیر عامل شرکت ندا  
    </p>
  </div>
</div>
    </article>
  )
  }