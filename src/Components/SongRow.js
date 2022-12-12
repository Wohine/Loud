import React from 'react'
import '../Styles/SongRow.css'

function SongRow(props) {
  return (
    <div className='songRow'>
        <img className='songRow__picture' src={props.image}/>
        <div className='songRow__info'>
            <h1>Sangtittel</h1>
            <p>Artist / Album</p>
        </div>
    </div>
  )
}

export default SongRow