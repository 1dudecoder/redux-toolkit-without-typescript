import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './App.css'
import {increase,decrese,reset} from "./feature/slice/CountSlice"
import {getData} from "./feature/slice/ApiSlice"

function App() {
  const [count, setCount] = useState(0);
  const [data,setData] = useState(null);
  
  const countstore = useSelector(state => state.count.count)
  const apistore = useSelector(state => state.api)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[dispatch])

  useEffect(()=>{
    setData(apistore);
  },[apistore])


  return (
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>

      <h1>store data {countstore}</h1>
      <button onClick={()=>dispatch(increase(10))}>+</button>
      <button onClick={()=>dispatch(decrese(5))}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>

      <hr />
      <br />

      <button onClick={()=>{dispatch(getData())}}>+++</button>
      <br />
      <br />
      { data && data.loading && <div>...loading </div>  }
      { data && typeof(data.data) === "string" && <div>{data.data}</div>   }
      { data && Array.isArray(data.data) === true && data.data.map((item)=>{
        return <p>{item.title}</p>
      })}


       
    </div>
  )
}

export default App
