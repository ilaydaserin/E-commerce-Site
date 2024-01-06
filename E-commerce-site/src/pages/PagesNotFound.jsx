import React from 'react'
import {Link} from 'react-router-dom'
function PagesNotFound() {
  return (
    <>
    <h1>404- Sayfa bulunamadı</h1>
    <Link to='/' className='btn btn-info'>Anasayfaya gitmek için tıklayın</Link>
    </>
  )
}

export default PagesNotFound    