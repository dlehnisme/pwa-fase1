import React, { Component } from 'react'
import {Paper, Card, CardActions, CardContent, CardMedia} from '@material-ui/core/';
import { Link } from 'react-router-dom';

const cityDestination = [
  {
    name: 'Yogyakarta',
    foto: 'https://images.unsplash.com/photo-1602057512587-76d5cc4b34e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },
  {
    name: 'Bandung',
    foto: 'https://images.unsplash.com/photo-1524655104453-91f9338ecb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Banyuwangi',
    foto: 'https://images.unsplash.com/photo-1578928560301-39a90349ad9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
]
export class Hero extends Component {
  
  // AXIOS SECTION
  // FUNCTION SECTION
  
  // RENDER SECTION
    renderHero = () => {
      return(
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  
                </div>
                <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                      Liburan ga pake ribet ?
                      <br className="xl:hidden" />
                      <span className='text-green-900 ml-2'>Ya kali ga kuy</span>
                    </h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Dengan Gaskuy selama liburan akan selalu merasa aman tanpa ada takut tanpa tujuan atau budget kelebihan
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-900 hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                          Get started
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-900 bg-gray-300 hover:bg-green-800 hover:text-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                          Live demo
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt />
            </div>
            </div>
      )
    }
    renderCityDestination = () => {
      return(
        <div className='container mx-auto'>
          <Paper
          elevation={10}
          className='my-5 p-16'
          >
            <div className='text-center mb-5'>
              <p className="text-base leading-6 font-semibold tracking-wide uppercase text-green-900">Destination</p>
            </div>
            <div className='flex flex-col md:flex-row'>
              {this.renderCity()}
            </div>
          </Paper>
        </div>
      )
    }
    renderCity = () => {
      return(
        cityDestination.map(data=>{
          return(
            <Link 
              to={{
                pathname:'/city',
                state:{
                  city: data
                }
              }}
            >
              <div>
                <img src={data.foto} alt={data.name} width={1000}/>
                <span className='text-block'> {data.name} </span>
              </div>
            </Link>
          )
      })
      )
    }
    render() {
        return (
            <div>
                {this.renderHero()}
               
                {this.renderCityDestination()}
            </div>
        )
    }
}

export default Hero
