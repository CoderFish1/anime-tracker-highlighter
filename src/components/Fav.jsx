import React from 'react'
import star from '../assets/star.svg'

const Fav = () => {
  return (
    <>
      <div className="box">
        <img className='w-8 h-8  absolute left-0 bottom-0 m-2.5' src={star} alt="favourites" />
      </div>
    </>
  )
}

export default Fav
