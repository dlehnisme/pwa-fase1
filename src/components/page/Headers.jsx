import React, { Component } from 'react'
import gaskuyLogo from '../../assets/image/gaskuyid.png'
export class Headers extends Component {
    state={
        toggle: false
    }
    onClickToggle = () => {
        this.setState(prevstate=>({
            toggle: !prevstate.toggle
        }))
    }
    render() {
        console.log(this.state.toggle)
        return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* BURGER BUTTON*/}
                <button 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" 
                aria-label="Main menu" 
                aria-expanded="false"
                onClick={this.onClickToggle}
                >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                <img className="block lg:hidden h-8 w-auto" src={gaskuyLogo} alt="Workflow logo" />
                <img className="hidden lg:block h-8 w-auto" src={gaskuyLogo} alt="Workflow logo" />
                </div>
                <h1 className='text-xl ml-4 text-white bold font-semibold'>Gaskuy.ID</h1>
                
            </div>
            {/* MENU FULL WIDTH */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                <div className="flex">
                    {/* <a href="#" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
                    <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Blog</a>
                    <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contact</a> */}
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* DROPDOWN RESPONSIVE */}
        <div className={this.state.toggle ? 'sm:hidden' : 'hidden sm:hidden'} >
            <div className="px-2 pt-2 pb-3">
            {/* <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
            <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Blog</a>
            <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contact</a> */}
            </div>
        </div>
        </nav>


        )
    }
}

export default Headers
