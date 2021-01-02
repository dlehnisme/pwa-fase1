import React, { Component } from 'react'
import { Paper, TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import Notes from './Notes';
import Headers from '../Headers';
const dataAkomodasi = [
    {
        nama: 'Hotel A',
        lokasi: 'Yogya Utara',
        harga: 300000,
        star: 3,
        img: ''
    },
    {
        nama: 'Hotel B',
        lokasi: 'Yogya Selatan',
        harga: 300000,
        star: 3.5,
        img: ''
    },
    {
        nama: 'Hotel A',
        lokasi: 'Yogya Utara',
        harga: 200000,
        star: 4.5,
        img: ''
    },
    {
        nama: 'Hotel A',
        lokasi: 'Yogya Utara',
        harga: 200000,
        star: 4.5,
        img: ''
    },
    {
        nama: 'Hotel A',
        lokasi: 'Yogya Utara',
        harga: 200000,
        star: 4.5,
        img: ''
    },
]
export class Akomodasi extends Component {

    mappingDataAkomodasi = () => {
        let arrData = dataAkomodasi.map((data, index)=>{
            return(
                <Paper
                    className='p-1 my-2'
                    elevation={3}
                    key={index}
                >
                    <div className='grid grid-cols-3'>
                        <img 
                            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            alt=""
                            width={100}
                            className='col-span-1'
                        />
                        <div className='col-span-1 ml-0'>
                            <p className='font-bold text-base'> {data.nama} </p>
                            <p className='text-xs'> {data.lokasi} </p>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col justify-around'>
                                <div className='flex flex-row ml-12'>
                                    <p className='text-lg font-bold'> {data.star} </p>
                                    <StarIcon
                                        className='text-yellow-500'
                                    />
                                </div>
                                <div className='mt-20'>
                                    <p className='text-green-900 font-bold'>Rp {data.harga} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        })
        return arrData
    }
    render() {
        return (
            <div>
                <Headers position="penginapan"/>
                <div className='mt-20'>
                    <div className='fixed-hotel_list'>
                        <div className='fixed-akomodasi mt-1'>
                            <TextField
                                variant='outlined'
                                fullWidth
                                placeholder='Cari Sesuai Lokasi / Nama'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <SearchIcon
                                        className='text-secondary'
                                        />
                                    </InputAdornment>
                                }}
                            />
                        </div>
                        <div 
                        className='mt-16 overflow-auto'
                        style={{
                            height: '100%',
                            minHeight: '60vh',
                            maxHeight: '60vh'
                        }}
                        >
                            {this.mappingDataAkomodasi()}
                        </div>
                    </div>
                    <Notes/>
                </div>
            </div>
        )
    }
}

export default Akomodasi
