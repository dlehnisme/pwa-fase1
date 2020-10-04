import React, { Component } from 'react'
import ReactGa from 'react-ga'

export class Blog1 extends Component {
    clickHandler = () => {
        ReactGa.event({
            category: 'Button',
            action: `Click to read Blog ${this.props.judul}`
        })
    }
    render() {
        return (
            <div className='container  overflow-hidden'>
                <div className='w-screen bg-cover bg-no-repeat lg:bg-center sm:bg-center h-screen' 
                style={{backgroundImage:`url(${this.props.background})`}}
                >
                    <div className='flex flex-col' style={{color:this.props.fontColor}}>
                        <div className='mt-10 mx-auto tracking-wider text-2xl title-page'>
                            <h1>
                                BLOG
                            </h1>
                        </div>
                        <div className='m-10'>
                            <h1 className='text-5xl bebas-neue__font leading-tight'>
                                {this.props.judul}
                            </h1>
                            <span className='bondoni-font italic border-b-2 tracking-widest'> {this.props.category} </span>
                            <h6 className='bondoni-font tracking-tighter mt-8'>
                                {this.props.ringkasan}
                            </h6>
                        </div>
                        {/* HEXGON */}
                        <div 
                        className="hexagon mx-auto"
                        onClick={this.clickHandler}
                        >
                            <a href={this.props.link}>
                                <h6 className='text-white text-sm px-3 pt-1 bebas-neue__font'>MORE</h6>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog1
