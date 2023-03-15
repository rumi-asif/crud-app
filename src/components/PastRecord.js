import React, { useState } from 'react';

const PastRecord = () => {

  const [sRecord, setsRecord] = useState([
    {
      reg: 1245804,
      enrollmentYear: 2021,
      grade: "A",
      lastYearStatus: 'Pass',
      recordPara: " He is a good student who is someone who respects everyone, follows the rules and is eager to learn. In order to succeed in life, an individual must be a good student."
    }
  ])
 console.log(sRecord.reg);
  return (
    sRecord?.map((item, ind) => (
    <div >
      <h1>Student`s past record</h1>
        <ul key={ind}>
            <li>Registration number: {item.reg}</li>
            <li>Enrollment Year: {item.enrollmentYear}</li>
            <li>Grade: {item.grade}</li>
            <li>last Year Status: {item.lastYearStatus}</li>
            <li>Behavior: {item.behavior}</li>
        </ul>
        <div>
            <p>{item.recordPara}</p>
        </div>
    </div>
    ))
  )
}

export default PastRecord;
