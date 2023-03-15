import React from 'react';
import './Style.css';

export default function Content({imageUrl, title, contentPara}) {
  return (
    <div>
      <img className='contentImage' src={imageUrl}/>
      <h4 className='contentTitle'>{title}</h4>
      <p className='contentPara'>{contentPara}</p>
    </div>
  )
}
