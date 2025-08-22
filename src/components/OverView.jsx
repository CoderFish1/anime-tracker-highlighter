import React from 'react'

const OverView = () => {
  return (
    <div className="w-56 h-64 bg-white p-4 rounded shadow-lg text-center overflow-auto">
      <h2 className="text-lg font-bold mb-2">Anime Overview</h2>
      <p>
        This is the overview of the anime. You can add synopsis, genre,
        ratings, or any other info here. Click outside to close.
      </p>
    </div>
  )
}

export default OverView
