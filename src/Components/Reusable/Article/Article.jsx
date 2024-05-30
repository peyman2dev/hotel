import { ArrowLeft, Clock } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Article(props) {
    return (
        <article className='w-full bg-white shadow-lg shadow-black/5 rounded-2xl overflow-hidden'>
            <header className='h-[248px] overflow-hidden w-full' >
                <img src={props.cover} alt="" className='object-cover duration-150 hover:scale-110 h-[248px] w-full' />
            </header>
            <main className='p-4'>
                <div className="ic gap-2 text-zinc-500 text-xs mb-2 ">
                    <Clock size={16} />
                    <span>
                        سه شنبه 12 فروردین 1403
                    </span>
                </div>
                <h4 className='font-IranSans-Bold'>
                    {props.title}
                </h4>
                <p className="mt-2 text-zinc-600 line-clamp-3 text-sm font-IranSans-Light">
                    {props.caption}
                </p>
            </main>
            <footer className='flex justify-end px-4 pb-4'>
                <Link className='ic text-secondary-700 gap-2'>
                    <span>
                        مشاهده
                    </span>
                    <span>
                        <ArrowLeft size={21}/>
                    </span>
                </Link>

            </footer>

        </article>
    )
}
