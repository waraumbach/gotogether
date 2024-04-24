


import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import { Input, Space } from 'antd';
const { Meta } = Card;
const { Search } = Input;



const Countries = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [countries, setCountries] = useState(null)
    const [searchs, setSearchs] = useState(null)
    const [search, setSearch] = useState(null)
    const [country, setCountry] = useState(null)

    const fetchCountries = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/countries`)
            setCountries(response.data)
            console.log(countries)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    const fetchCountryByName = async () => {
        try {
            const response = await axios(`http://localhost:3000/countries/name/${search}`)
            setCountry(response.data)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchCountries()
    }, [search])



    if (error) return <p>Error</p>
    if (loading) return <p>Loading...</p>


    return (
        <>
            <h1>Countries</h1>
            <Search
                placeholder="Country search"
                allowClear
                value={search}
                required
                style={{ width: 304 }}
                onChange={(e) => setSearch(e.target.value)}
                onSearch={() => fetchCountryByName()}
            />
            <div style={{ display: 'flex', justifyContent: 'space-around',  }}>
                {country ? (
                    <Link to={`/countries/${country._id}`}>
                        <Card
                            hoverable
                            style={{ width: 240, margin: '10px' }}
                        >
                            <Meta name={country.name} description={country.location} />
                            <h2>{country.name}</h2>
                        </Card>
                    </Link>
                )
                    : (
                        countries.map(country => {
                            return (
                                <>
                                    <Link to={`/countries/${country._id}`}>
                                        <Card
                                            hoverable
                                            style={{ width: 240, margin: '10px' }}
                                        >
                                            <Meta name={country.name} description={country.location} />
                                            
                                            
                                            
                                            <h2>{country.name}</h2>
                                        </Card>
                                    </Link>
                                </>
                            )
                        })
                    )
                }
            </div>

        </>
    )
}

export default Countries