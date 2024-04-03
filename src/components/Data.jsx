import React, { useEffect, useState } from 'react'
import Table from './Table';

const Data = () => {
    const [data,setData]=useState([])
  async function getdata(){
   let res= await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
   let result=await res.json();
    setData(result)
}

useEffect(()=>{
    getdata()
},setData)
  return (
    <div>
     <Table data={data}/>
    </div>
  )
}

export default Data
