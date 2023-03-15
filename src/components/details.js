import React from 'react'

export default function details({value, handleClick}) {
  return (
    <div> 
    <h3 >Name: {value.name}</h3>
    <h3 >Father Name: {value.Fname}</h3>
    <h3 >Age: {value.age}</h3>
    <h3 >Current Class: {value.class}</h3>
    <h3 >Gender: {value.gender}</h3>
    <h3 >Address: {value.adress}</h3>

    <button onClick={handleClick}>Click</button>
    </div>
  )
}
