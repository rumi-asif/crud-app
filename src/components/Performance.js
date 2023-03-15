// import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'

const Performance = () => {
  const [performance, setPerformance] = useState([
    {
      attaindance: '70% ',
      behavior: "Very good",
      cleanleness: 'Excellent',
      Grade: 'A',
      Activities: 'Extra-ordinary',
      Sports: 'Athletic'
    }
  ])
  return (
    performance?.map((item, ind) => (
    <div key={ind}>
        <h2>Overall Student Performance..!</h2>
        <p>This section is comparing students overall performance throuth the year in different areas</p>
        <h3>Attaindance : {item.attaindance}</h3>
        <h3>Behavior : {item.behavior}</h3>
        <h3>Cleanliness : {item.cleanleness}</h3>
        <h3>Grade : {item.Grade}</h3>
        <h3>Cocracullar Activities : {item.Activities}</h3>
        <h3>Sports : {item.Sports}</h3>
    </div>))
  )
}

export default Performance;
