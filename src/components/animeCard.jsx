import React from 'react'

const AnimeCard = ({onShowOverview}) => {
  return (
    <>
    <div className="cont">
      <div className="cont w-80 h-72 border-4 m-auto my-10">
        <img className='w-full h-full object-cover' src="https://sm.mashable.com/t/mashable_me/photo/default/untitled-2024-12-23t172251384_9yww.2496.jpg" alt="poster" />
         <div className=" title w-full text-center border whitespace-nowrap"><span>Jujutsu Kaisen</span></div>
         <div onClick={onShowOverview} className="overview m-auto text-center w-30 p-2 border mt-8 rounded-3xl">OverView</div>
      </div>
     
    </div>
      
    </>
  )
}

export default AnimeCard
