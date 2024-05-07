import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../Loader.jsx'
import ReactPlayer from 'react-player'


const Reviews = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState(null)


    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/reviews')
            setReviews(response.data)

        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    if (error) return <p>{error}</p>
    if (loading) return <Loader />

    return (
        <>
               

            <div class='flex justify-around'>
            {reviews.map(review => {
                return (
                    <>
                        <div class="relative w-fit    rounded-xl bg-white bg-clip-border text-gray-500 shadow-md m-6 ">
                            <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <ReactPlayer url={review.url} />
                            </div>
                            <div class="p-6">
                             
                                <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                                    {review.music}
                                </p>
                                <p>{review.content}</p>
                            </div>
                            <div class="flex items-center justify-between p-6">
                               
                                <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                    {review.rating}/5
                                </p>
                                <p>
                                    {review.userID.name}
                                </p>
                            </div>
                        </div>
                      

                      
                    </>
                )})}
                </div>
                </>
    )
}


export default Reviews