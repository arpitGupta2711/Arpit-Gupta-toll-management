import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'

const TollEntries = ({setTollFlag ,setLogsFlag,}) => {
  return (
   <Navbar title={"Toll entries/Vehicle entries"} searchPlaceholder={"Search Vehicle"}setTollFlag={setTollFlag} setLogsFlag={setLogsFlag} filter/>
  )
}

export default TollEntries  