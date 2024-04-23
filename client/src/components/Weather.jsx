import axios from 'axios'
import { useState, useEffect } from 'react'



const Weather = () => {

    const API_KEY = 'ec5f933788ec2e550fc16821c27da3f6'

    const [weather, setWeather] = useState(null)
    const [search, setSearch] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const weatherApiCall = async (search) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search ? search : 'Prague'}&appid=${API_KEY}`)
            setWeather(response.data)
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        weatherApiCall()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        weatherApiCall(search)
    }



    if(error) return <p>{error.message}</p>
    if(loading) return <p>Loading...</p>

    return (
        <>
            <h3>Welcome to the Weather component</h3>
            {weather.weather[0].description} in : {weather.name}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setSearch(e.target.value)} />
                <input type="submit" value='City' />
            </form>
        </>
    )
}


export default Weather