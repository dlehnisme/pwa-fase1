import React, { Component } from 'react'
import gaskuy from '../../assets/image/gaskuy.png'
export class PageOne extends Component {
    render() {
        return (
            <div className='container w-100 overflow-hidden'>
                <div className='bg-fixed w-screen bg-cover bg-no-repeat lg:bg-center sm:bg-left-top h-screen bg-gaskuy-1_mobile'>
                <img src={gaskuy} width={200} className='mx-auto pt-4' alt="Gaskuy.ID"/>
                    <div className='flex flex-col'>
                        <div className='ml-5 mr-4 md:mb-s24 md:w-1/2'>
                            <h1 className='bebas-neue__font text-white tracking-widest text-6xl font-medium'>
                                Beres pandemik kita liburan bareng !
                            </h1>
                        </div>
                        <div className='mt-48 flex justify-center tracking-widest text-2xl'>
                            <h1 className='bebas-neue__font color-gaskuy1'>
                                #YAKALIGAKUY
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PageOne
