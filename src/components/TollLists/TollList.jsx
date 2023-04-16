import React from 'react'
import Navbar from '../Navbar/Navbar'

const TollList = ({setTollFlag ,setLogsFlag}) => {
    

  return (

     <Navbar title={"Tollgate List"} searchPlaceholder={"Search Tolls"} setTollFlag={setTollFlag} setLogsFlag={setLogsFlag} />
  )
}

export default TollList