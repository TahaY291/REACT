import React, { useEffect, useState } from 'react'
import Card from './Card'

function Content() {

    const [array, setArray] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setArray(data)
        }
        fetchData()
    }, [])
    console.log(array);





    return (
        <div className=''>
            <h1 className='text-3xl font-bold ml-5 my-3'>Content...</h1>
            <div className="container gap-4 mx-auto  columns-4">
                {array.map((arr) => (
                    <Card arr={arr} key={arr.id} />
                ))}
            </div>
        </div>
    )
}

export default Content