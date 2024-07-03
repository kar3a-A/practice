import { useState } from 'react'
import styles from './Home.module.css'
import useFetch from '../../hooks/useFetch'

const Home = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1000)
  let Link = `https://narutodb.xyz/api/character?page=1&limit=${limit}`
  const [url, seturl] = useState(Link)

  const {data, loading} = useFetch(url)
  return (
    <div className={styles.container}>
      {
        data && console.log(data.currentPage +1)
      }
      
      <div className={styles.containerHead}>
        <h2>Infinite Naruto Web Practice</h2>
        {
          loading && <h4>Loading...</h4>
        }
      </div>
      <div className={styles.cardContainer}>
        {
          data && data.characters.map((item) => (
            <a href={'/'} key={item.name}>
            <div key={item.name} className={loading? styles.hideCard : styles.card}>
              <h3>{item.name}</h3>
              <img src={item.images} alt={item.name} className={styles.img}/>
            </div>
            </a>
          ))
        }
      </div>
      {/* footer  */}
      <div className={styles.containerFooter}>
        <h2>Page {page}</h2>
        <button onClick={() =>{ setPage((prev)=> prev - 1); seturl}}> Previous</button>
        <button onClick={() =>{ setPage((prev)=> prev + 1)}}> Next </button>
      </div>
      
    </div>
  )
}

export default Home