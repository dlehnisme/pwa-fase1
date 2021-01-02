import React, { Component } from 'react'
import { Paper, TextField, InputAdornment } from '@material-ui/core'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import svgTransportasi from '../../assets/svg/transportasi.svg'
import svgHotel from '../../assets/svg/hotel.svg'
import svgDestinaasi from '../../assets/svg/destinasi.svg'
import svgRestourant from '../../assets/svg/restourant.svg'
import { setPositionPage } from '../../helper/postionPage';
import Headers from './Headers';
const arrNeeded = [
    {
        nama: 'Transportasi',
        svg: svgTransportasi,
        className: 'mt-20 mb-20 mx-6',
        link: '/transportasi'
    },
    {
        nama: 'Penginapan',
        svg: svgHotel,
        className: 'mt-12 mb-16 mx-6',
        link: '/akomodasi'
    },
    {
        nama: 'Destinasi Wisata',
        svg: svgDestinaasi,
        className: 'mx-6 mb-2',
        link: '/destinasi'
    },
    {
        nama: 'Tempat Makan',
        svg: svgRestourant,
        className: 'mt-10 mb-10',
        link: '/restourant'
    },
] 
export class Dashboard extends Component {
    componentDidMount(){
        setPositionPage('dashboard')
    }
    mappingNeeded = () => {
        let arr = arrNeeded.map((data, index)=>{
            return(
            <Link
            key={index}
            to={{
                pathname: data.link
            }}
            >
                <div
                    className='p-2 bg-gradient-to-r from-green-900 to-green-800 rounded-lg'
                >
                    <div className='h-32'>
                        <h1 className='text-center text-white text-5xl font-black mt-16'>
                            {data.nama}
                        </h1>
                    </div>
                    <div className='my-8 md:my-20'>
                        <img 
                        src={data.svg} 
                        alt=""
                        style={{
                            minHeight: '250px',
                            maxHeight: '250px',
                            height: '100%'
                        }}
                        />
                    </div>
                </div>
            </Link>
            )
        })
        return arr
    }
    render() {
        const settings = {
            className: "center mx-2",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
        };
        return (
            <div>
                <Headers position="dashboard"/>
                <div className='mt-24'>
                    <div className='fixed-dashboard'>
                        <Slider
                            {...settings}
                        >
                            {this.mappingNeeded()}
                        </Slider>
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
            </div>
        )
    }
}

export default Dashboard
