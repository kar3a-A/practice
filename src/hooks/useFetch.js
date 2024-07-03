import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
        setData(data)
        console.log(data)
        })
        .catch((err) => console.log(err))
    },[url])

    return {data};
}

export default useFetch
