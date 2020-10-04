import React, { Component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import '../assets/style.css'
import ReactGa from 'react-ga'
// PAGE
import PageOne from './page/PageOne'
import AboutUs from './page/AboutUs'
import Blog from './page/Blog'
import Blog1 from './page/Blog1'
import Footer from './page/Footer'
// BACKGROUND
import backgroundBlog1 from '../assets/image/gaskuy-blog-1.jpg'
import backgroundBlog2 from '../assets/image/gaskuy-blog-2.jpg'
import backgroundBlog3 from '../assets/image/gaskuy-blog-3.jpg'
import Axios from 'axios'
let arr = [
    {
        background: backgroundBlog1
    },
    {
        background: backgroundBlog2
    },
    {
        background: backgroundBlog3
    },
    
]
let platformArr = ['WinCE', /*'Win32'*/, 'Win16', 'Windows', 'Pocket PC', 'OS/2', 'Linux', 'Linux aarch64', 'Linux armv5tejl', 'Linux armv6l', 'Linux armv7l', 'Linux armv8l', 'Linux i686', 'Linux i686 on x86_64', 'Linux i686 X11', 'Linux MSM8960_v3.2.1.1_N_R069_Rev:18', 'Linux ppc64', 'Linux x86_64', 'Linux x86_64 X11', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', null] 
export class App extends Component {
    state={
        platform : true,
        dataBlog : null
    }
    componentDidMount(){
        this.reactGoogleAnalytics()
        this.noPlatformWeb()
        this.getDataBlog()
    }

    getDataBlog = () => {
        Axios.get(`https://blog.gaskuy.id/wp-json/wp/v2/posts?page=1&per_page=3`)
        .then(res=>{
            let arry = res.data
            arr.map(bg=>{
                return(
                    arry.map((data, index)=>{
                        return data['background'] = arr[index]
                    })
                )
            })
            this.setState({dataBlog: arry})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    reactGoogleAnalytics = () => {
        ReactGa.initialize('UA-178754529-1')
        ReactGa.pageview(window.location.pathname)
    }

    noPlatformWeb = () => {
        const version = navigator.platform
        platformArr.map(data=>{
            if(data === version){
                window.location.assign('https://blog.gaskuy.id/')
            }
            return null
        })
    }

    renderBlog = () => {
        let blog = this.state.dataBlog.map((blog, index)=>{
                return(
                    <Blog1
                    key={index}
                    judul = {blog.title.rendered}
                    category = {blog.categories[0] === 27 ? 'Journal' : blog.categories[0] === 26 ? 'Event' : blog.categories[0] === 28 ? 'Travel Tips' : blog.categories[0] === 25 ? 'Destination' : 'Journal'} 
                    ringkasan = {blog.excerpt.rendered.slice(3,200) + '  ....'}
                    background = {blog.background.background}
                    link = {blog.link}
                    fontColor = {index === 2 ? 'black' : 'white'}
                    />
                )
        })
        return blog
    }

    render() {
        if(!this.state.platform){
            window.location.assign('https://blog.gaskuy.id/')
        }
        if(this.state.dataBlog === null){
            return(
                <h1>Lagi LOADING</h1>
            )
        }
        return (
                <BrowserRouter>
                    <div className='container'>
                        {/* <Header/> */}
                        <Route path='/' exact component={PageOne}/>
                        <Route path='/' exact component={AboutUs}/>
                        <Route path='/' exact component={Blog}/>
                        {this.renderBlog()}
                        <Footer/>
                    </div>
                </BrowserRouter>
        )
    }
}

export default App
