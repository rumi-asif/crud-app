import React, { useState } from 'react';
import Details from "./details";

const StudnetDetials = () => {
  const [sDetial, setSDetails] = useState([
    {
     name:"asif",
     Fname:"khan",
     age:"20",
     class: "10th",
     gender: "male",
     adress: "Jutial Gilgit"
    },
  ])

  const handleClick = () => {
    setSDetails((prev)=> ([
      ...prev,
      {
        name:"ali",
        Fname:"sadasd",
        age:"22",
        class: "10th",
        gender: "female",
        adress: " Gilgit"
       }
      ]))
  }
  return (
    sDetial.map((item, ind)=>(
      <Details value={item} handleClick={handleClick} key={ind}/>
    ))
  )
}

export default StudnetDetials;
