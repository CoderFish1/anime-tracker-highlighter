import React from 'react'

const OverView = ({onClose}) => {
  return (
    
    <div className='fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50'>
      <div className="w-64 h-72 bg-white p-4 rounded shadow-lg text-center overflow-auto">
      <h2 className="text-lg font-bold mb-2">Anime Overview</h2>
      <p>
        This is the overview of the anime. You can add synopsis, genre,
        ratings, or any other info here. Click outside to close.
      </p>
      <button onClick={onClose} className='mt4 px-3 py-1 bg-red-500 text-white rounded'>
        Close
      </button>
    </div>
    </div>
  )
}

export default OverView
