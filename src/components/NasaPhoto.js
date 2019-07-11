import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core/';


const NasaPhoto = (props) => {

    const [nasaData, setNasaData] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=RjA13nhNQbkZjJwDwsGQHjMIqT3yFhcNeXjGe1KG`)
            .then(res => {
                console.log(res)
                setNasaData(res.data)
            })
            .catch(err => console.log(err.response.statusText))
    },[])
        
        // console.log(nasaData.url)

    return (
        <Paper>
            <Typography>  Nasa Photo of the Day! 🚀 </Typography> 
            <img src={nasaData.url} alt="NASA" />
        </Paper>
    )
}
export default NasaPhoto;