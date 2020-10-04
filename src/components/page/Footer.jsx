import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className='background-footer bg-cover bg-no-repeat w-screen'>
                {/* <img 
                src={logoGaskuy} 
                alt="gaskuy.id"
                className='w-40 mx-auto pt-8'
                /> */}
                <div className='flex flex-row'>
                    <div style={{color:'grey'}} className='mx-auto'> 
                        <a className='icon-decoration' href="https://www.instagram.com/johanellsibarani/">
                        <i className="fab fa-instagram fa-5x"></i>
                        </a>
                        <a className='icon-decoration' href="https://www.instagram.com/johanellsibarani/">
                        <i className="fas fa-globe-asia fa-5x"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
