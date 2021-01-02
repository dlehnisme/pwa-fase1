import React, { Component } from 'react'
import Headers from '../Headers';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brio from '../../../assets/svg/brio.svg'
import { Link } from 'react-router-dom';
import { Paper, TextField, InputAdornment } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

const transport = [
    {
        nama: 'Honda Brio',
        kapasitas: 3,
        harga: '30.000',
        pic: brio  
    },
    {
        nama: 'Honda Brio',
        kapasitas: 3,
        harga: '30.000',
        pic: brio  
    },
    {
        nama: 'Honda Brio',
        kapasitas: 3,
        harga: '30.000',
        pic: brio  
    },
]
export class Transportasi extends Component {

    mappingTransport = () => {
        let maping = transport.map((data, index)=>{
            return(
                <div 
                className='flex flex-col'
                key={index}
                >
                    <img src={data.pic} alt=""/>
                    <p className='text-2xl font-bold uppercase text-center -mt-24'> {data.nama} </p>
                    <p className='text-lg text-center'>Kapasitas {data.kapasitas} orang</p>
                    <p className='text-5xl font-bold text-green-900 text-center'>Rp {data.harga} </p>
                    <div className='border-2 p-3 rounded-lg bg-green-900 w-32 mx-auto'>
                        <div className='flex justify-center space-x-0'>
                            <p className='text-lg font-bold mr-2 text-white'>Pilih</p>
                        </div>
                    </div>
                </div>
            )
        })
        return maping
    }
    render() {
        const settings = {
            className: "center mx-4 -mt-12",
            infinite: true,
            // centerPadding: "60px",
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
        };
        return (
            <div>
                <Headers position="transportasi" />
                <div className='mt-20'>
                    <div className='fixed-dashboard'>
                        <p className='text-3xl font-bold text-center'>Transportasi</p>
                        <Slider
                            {...settings}
                        >
                            {this.mappingTransport()}
                        </Slider>
                    </div>
                </div>
                <div className='relative-dashboard'>
                        <Paper
                            className='p-3 pb-20'
                            elevation={3}
                        >
                            <div className='bg-green-900 mt-1 mb-2 w-10 h-1' />
                            <div className='flex flex-row justify-between'>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    disabled
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>
                                    }}
                                />
                            </div>
                            <div>
                                <Link
                                    to={{
                                        pathname: '/dashboard'
                                    }}
                                >
                                    <button className='w-full border-2 mt-5 p-3 rounded-lg bg-green-900'>
                                        <div className='flex justify-center space-x-0'>
                                            <p className='text-lg font-bold mr-2 text-white'>Gaskuy</p>
                                            <SendIcon className='text-white'/>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </Paper>
                    </div>
            </div>
        )
    }
}

export default Transportasi
