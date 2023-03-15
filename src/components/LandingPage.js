import React from 'react';
import Content from './Content';
import pic1 from '../assets/pic2new.jpg';
import pic2 from '../assets/pic2new.jpg';
import pic3 from '../assets/pic2new.jpg';
import pic4 from '../assets/pic2new.jpg';


const imgArr = [
  {
    img: pic1,
    title: "beautiful picture 1",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    img: pic2,
    title: "beautiful picture 2",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  },{
    img: pic3,
    title: "beautiful picture 3",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  },{
    img: pic4,
    title: "beautiful picture 4",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  },
]


export default function LandingPage() {
  return (
    <div className='content-flex'>
      {
        imgArr?.map((item)=>{
          return(
            <Content imageUrl={item.img} title={item.title} contentPara={item.para}/>
          )
        })
      }
   
    </div>
  )
}
