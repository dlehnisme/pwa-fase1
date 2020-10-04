import React, { Component } from 'react'
import Lottie from 'react-lottie'
import  Animation from '../../assets/animation/scroll-gaskuy.json'

export class Blog extends Component {
    render() {
        return (
            <div className='w-screen bg-cover bg-no-repeat lg:bg-center sm:bg-left-top h-screen bg-gaskuy-blog_mobile  overflow-hidden'>
                <div className='flex flex-col'>
                    <div className='mt-64 mx-auto bebas-neue__font tracking-wider text-6xl text-white'>Blog</div>
                    <div className='grid grid-cols-6'>
                        <hr className='col-start-3 col-end-5' style={{width: '100%', textAlign: 'left', marginLeft: 0}} />
                    </div>
                    <div className='text-center mx-10 text-white bondoni-font tracking-wide italic'>
                        <h1>tulisan-tulisan terupdate 
                        seputar dunia traveling yang pasti akan 
                        menambah wawasan serta referensimu untuk 
                        liburan selanjutnya!</h1>
                    </div>
                    <div>
                        <Lottie
                            options={{
                                animationData: Animation,
                                autoplay: true,
                                loop:true,
                                rendererSettings:{
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                            height={200}
                            width={100}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog
