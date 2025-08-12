import React from 'react'
import notfound from '../../assets/imges/not-found/404-not-found.png'

import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <img src={notfound} alt="404 not found" />
    </div>
  )
}

export default NotFound