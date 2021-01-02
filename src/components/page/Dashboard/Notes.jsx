import React, { Component } from 'react'
import { Paper, TextField, InputAdornment } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export class Notes extends Component {
    render() {
        return (
            <div className='relative-notes'>
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
        )
    }
}

export default Notes
