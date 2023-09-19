import { useEffect, useState } from 'react'
import data from '../../data.json'
import TrendingCard from '../../components/trending-card/TrendingCard'

const Trending = () => {
  const [trendData, setTrendData] = useState([])
  useEffect(() => {
    setTrendData(data.filter(elmt => elmt.isTrending === true))
  }, [])
  return (
    <section className='container trending-container'>
      {
        trendData.map(elmt => (
          <TrendingCard key={elmt.title}  trending={elmt}/>
        ))
      }
    </section>
  )
}

export default Trending