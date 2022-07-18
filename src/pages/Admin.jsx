import React, { useEffect } from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import TableList from '../components/TableList'
import {useSelector} from 'react-redux'

function Admin() {
  const reduxResponse = useSelector((state) => state.auth.login);
  

  useEffect(() => {

  },[])
  return (
    <>
      <HeaderAdmin/>
      <TableList/>
    </>
  )
}

export default Admin