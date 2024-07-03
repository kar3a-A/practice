import { useState } from 'react'
import styles from './Home.module.css'
import useFetch from '../../hooks/useFetch'

const Home = () => {
  const Link = `https://narutodb.xyz/api/character?page=1&limit=100`
  const [url, seturl] = useState(Link)

  const {data} = useFetch(url)
  return (
    <div>
      {
        console.log(data)
      }

      <div className={styles.container}>
      <div>
        <h2>Infinite Naruto Scrolling Web Practice</h2>
      </div>
        {
          data && data.characters.map((item) => (
            <div key={item.name} className={styles.card}>
              <h3>{item.name}</h3>
              <img src={item.images} alt={item.name} className={styles.img}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home