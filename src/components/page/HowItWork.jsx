import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const caption = [
    {
        id: 1,
        caption: 'Masukan Budget Liburan',
        subCaption: 'Beritahu Kami Budget yang kamu Miliki',
        picture: "pic 1"
    },
    {
        id: 2,
        caption: 'Pilih Liburan',
        subCaption: 'Beritahu Kami Budget yang kamu Miliki',
        picture: "picture 2"
    },
]

export class HowItWork extends Component {

    renderHowItWork = () => {
        let render = caption.map((data, index)=>{
            return(
                <SplideSlide key={index}>
                    <div className='flex'>
                        <div className='flex-shrink-0'>
                            <div className='grid grid-cols-1'>
                                <div className='grid grid-cols-1'>
                                    <div className='place-self-center'>
                                        <h1>
                                            {data.picture}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-green-900 text-white rounded-lg w-max-content'>
                                <div className='flex flex-col pb-6 pt-2 px-2'>
                                    <span className='text-lg font-bold bg-green-800 h-8 w-8 rounded-full  text-white'>
                                        {data.id}
                                    </span>
                                    <div className='flex flex-col items-start justify-start rounded-md ml-4'>
                                        <p className='text-lg font-bold'>
                                            {data.caption}
                                        </p>
                                        <p className='text-sm text-gray-800'>
                                            {data.subCaption} 
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </SplideSlide>
            )
        })
        return render
    }
    render() {
        return (
            <div className='py-12 bg-white'>
                <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Tulisan How It works */}
                    <div className='text-center'>
                        <p className='text-base leading-6 font-semibold tracking-wide uppercase text-green-900'>
                            How to Use Gaskuy.ID
                        </p>
                    </div>
                    <div className="lg:text-center">
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Simplicity is a Key to Solve
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                            Dengan Gaskuy Sekarang liburang ga harus ribet dan perlu takut lagi. Masukan harga biar kami yang mengatur segalanya. Kan kita teman.
                        </p>
                    </div>
                    <div className='mt-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10'>
                        <div className='m-0 md:place-self-center'>
                            <Splide
                            options={{
                                rewind: true,
                                perPage: 1,
                                perMove: 1,
                                // gap: '1rem',
                                width: 400,
                                padding: {
                                    // right: '2rem',
                                    left : '1rem',
                                },
                                arrowPath: ' '
                            }}
                            >
                                {this.renderHowItWork()}
                            </Splide>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWork
