import React, { Component } from 'react'
import {List, ListItem, ListItemText, Divider, Paper, Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core/';
import pic from '../../assets/image/city-gaskuy.jpg'
import { Link } from 'react-router-dom';

export class City extends Component {
    render() {
        return (
            <div>
                <div className='bg-city'>
                    <h1 className='text-6xl text-center pt-20 uppercase text-yellow-400'> {this.props.location.state.city.name} </h1>
                </div>
                <div className='grid grid-cols-6 p-20'>
                    <div className='col-span-1'>
                        <div className='w-56 mx-auto'>
                            <List component="nav" aria-label="mailbox folders" className='bg-gray-300'>
                                <ListItem button>
                                    <ListItemText primary="Wisata Alam" />
                                </ListItem>
                                <Divider />
                                <ListItem button divider>
                                    <ListItemText primary="Perkotaan" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Pantai" />
                                </ListItem>
                                <Divider light />
                                <ListItem button>
                                    <ListItemText primary="Gunung" />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <Paper
                        elevation={4}
                        className='p-20'
                        >
                            <Link 
                            to={{
                                pathname:'/destination',
                            }}
                            >
                                <Card className='max-w-sm'>
                                    <CardActionArea>
                                        <CardMedia
                                        image={pic}
                                        component='img'
                                        width='100'
                                        height='100'
                                        />
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default City
