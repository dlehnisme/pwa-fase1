import React, { Component } from 'react'
import gaskuy from '../../assets/image/gaskuy.png'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';

export class Headers extends Component {
    state={
        position: JSON.parse(localStorage.getItem("pagePosition"))
    }
    componentDidMount(){
        this.setState({position: this.props.position})
    }
    
    render() {
        return (
            <div className='container-header py-2 h-20'>
                    {
                        this.state.position === 'home' || this.state.position === 'dashboard' ?
                        <div className='flex flex-row max-w-lg'>
                            <img src={gaskuy} alt="gaskuy.id" className='max-h-1 h-16'/>
                        </div>
                        :<div className='flex flex-row justify-start p-4' 
                            style={{
                                maxWidth:'450px',
                                minWidth:'350px',
                                width:'100%',
                                margin:"0 auto",
                            }}
                            >
                            <div className='w-4 m-0'>
                                <Link to={{
                                    pathname:'/dashboard'
                                }}>
                                    <KeyboardBackspaceIcon style={{fontSize:"35px", fontWeight:'1000px'}} className='text-green-800' />
                                </Link>
                            </div>
                            <p className='text-green-800 font-bold text-2xl w-auto ml-6'>Dashboard</p> 
                            </div>
                    }
                    
            </div>
        )
    }
}

export default Headers
