import React, { Component } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ExploreIcon from '@material-ui/icons/Explore';
import { Link } from 'react-router-dom';

let style = {
    height:'35px',
    width:'35px',
    color: '#067373'
}
export class Footer extends Component {

    render() {
        return (
            <div className='container-footer h-16'>
                <div className='flex flex-row justify-around p-4 max-w-lg'>
                    <Link
                        to={{
                            pathname: '/'
                        }}
                    >
                        <HomeIcon style={style} />
                    </Link>
                    <ExploreIcon style={style}/>
                    <PersonPinIcon style={style}/>
                </div>
            </div>
        )
    }
}

export default Footer
