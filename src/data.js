import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [edata,setEdata]=useState(null)
  const fetchData=()=>{
    const equitylist=['TITAN','PCJEWELLER']
    const endpoints=equitylist.map((eq)=>`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${eq}.BSE&outputsize=full&apikey=X5CF7TZ6G7LXS4LY`)

    axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then(axios.spread((...allData)=>{
      const everydata=allData
      setEdata(everydata)
    }))
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  if (edata){
    return {
      edata
    };
  }
  
};

export default useFetchData;



  // axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then((data)=>console.log(data))
  // axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then(axios.spread((...allData)=>{console.log(data1,data2)}))
  // Promise.all(endpoints).then(
  //   axios.spread((...allData) => { 
  //     setEdata(allData)
  //   })
  // )