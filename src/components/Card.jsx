import React from 'react'
import './Card.css'



const Card = ({kartinBasligi,kartinShekli,kartinParaqrafi}) => {


  return (
    <div className='card border-0'>
<img src={kartinShekli} alt=""className='blog-img' />
<div className="card-body p-0 py-3">
    <h1 className='title'>{kartinBasligi}</h1>
    <p className='paragraph'>{kartinParaqrafi}</p>

    <div className="metadata">
  <img src="/assets/icons/favicon.svg" alt="" />
  <span className='moderator'>Pecode Team     <span id="tarix">19.03.2023</span>     </span>
</div>


</div>


    </div>
  )
}

export default Card