import './App.css';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import axios from'axios';

function App() {
  const [datecard, setData] = useState([])

  const getData = () => {
    axios('datecard.json').then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {

    getData()

  }, [datecard])

  return (
    <div className="App">
      {datecard?.map(el => {
        return (

          <Cards key={el.id} name={el.name} image={el.image} title={el.title} description={el.description}/>
        )
      })}
    </div>
  );
}

export default App;
