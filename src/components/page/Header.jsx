import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className='container fixed pt-10'>
                <div className="flex justify-center bebas-neue__font text-xl transparant">
                    <h1 className="text-gray-500 text-center px-4 mx-2">Home</h1>
                    <h1 className="text-gray-500 text-center px-4 mx-2">About</h1>
                    <h1 className="text-gray-500 text-center px-4 mx-2">Blog</h1>
                </div>
            </div>
        )
    }
}

export default Header
