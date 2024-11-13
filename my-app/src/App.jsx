
import axios from 'axios'
import Card from './components/Card'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
   const [data, setData] = useState([])
  

  const getData= async()=>{
     const response = await axios.get("https://picsum.photos/v2/list")
     setData(response.data)
     console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [])
  
 
  return (
      
    <div className='p-10'>
        <div>
          {data.map(function (elem,idx) {
            return <Card key={idx} img={elem.download_url} name={elem.author} />
          })}
        </div>
      </div>

    
  )
}

export default App