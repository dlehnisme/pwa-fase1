import { Paper, TextField, InputAdornment } from '@material-ui/core'
import React, { Component } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import svgHome from '../../assets/svg/home2.svg';
import { setPositionPage } from '../../helper/postionPage';
import Headers from './Headers';
let kota = [
    {
        nama: 'Bandung'
    },
    {
        nama: 'CImahi'
    },
    {
        nama: 's'
    },
    {
        nama: 's'
    },
    {
        nama: 's'
    },
]
export class Home extends Component {
    mappingKota = () => {
        let hasil = kota.map((data, index)=>{
            return(
                <div
                    key={index}
                >
                    <img 
                    src='https://images.unsplash.com/photo-1567773616496-b93ef5caa386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
                    alt=""
                    className='md:w-32 w-24 rounded'
                    />
                </div>
            )
        })
        return hasil
    }

    render() {
    const settings = {
        className: "center",
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

        return (
            <div>
                <Headers position="home"/>
                <div className='mt-20'>
                    <div className='fixed-bg'>
                        <div className='p-5 bg-gradient-to-r from-green-900 to-green-800'>
                            <div>
                                <p className='text-xl font-bold text-white'>Liburan Ga Pake Ribet ?</p>
                                <p className='text-3xl font-black text-white'>Yakali Ga Kuy !</p>
                            </div>
                            <div className='flex flex-row justify-around'>
                                <div className='flex flex-col space-y-1 mr-10'>
                                    <button className='border-2 mt-5 p-2 rounded-lg w-20'>
                                        <p className='text-sm font-bold text-white'>Sign In</p>
                                    </button>
                                    <button className='border-2 mt-5 p-2 rounded-lg w-20 bg-white'>
                                        <p className='text-sm font-bold text-gray-800'>Sign Up</p>
                                    </button>
                                </div>
                                <div>
                                    <img src={svgHome} width={200} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <h1 className='font-bold text-green-800 mb-4'>Destinasi</h1>
                            <Slider
                            {...settings}
                            >
                                {this.mappingKota()}
                            </Slider>
                        </div>
                    </div>
                    <div className='relative-bg '>
                        <Paper
                            className='p-3 pb-20'
                            elevation={3}
                        >
                            <div className='bg-green-900 mt-1 mb-2 w-10 h-1' />
                            <div className='flex flex-row justify-between'>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>
                                    }}
                                />
                                <TextField
                                variant='outlined'
                                className='w-32'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <PersonIcon
                                        className='text-secondary'
                                        />
                                    </InputAdornment>
                                }}
                                />
                            </div>
                            <div className='flex flex-row mt-2'>
                                <div className='border-2 rounded-lg w-full '>
                                    <TextField
                                        className='w-1/2'
                                        type='date'
                                        label='From'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                    <TextField
                                        className='w-1/2'
                                        type='date'
                                        label='To'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <Link
                                    to={{
                                        pathname: '/dashboard'
                                    }}
                                >
                                    <button className='w-full border-2 mt-5 p-3 rounded-lg bg-green-900'
                                    onClick={()=>setPositionPage('dashboard')}
                                    >
                                        <div className='flex justify-center space-x-0'>
                                            <p className='text-lg font-bold mr-2 text-white'>Submit</p>
                                            <SendIcon className='text-white'/>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
