import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data)
            console.log(data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    },[url])

    return {data, loading};
}

export default useFetch
