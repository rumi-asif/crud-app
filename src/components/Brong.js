import {React, useState, useEffect} from 'react';

export const Brong = () => {

    const [apiItem, setapiItem] = useState([]);

    useEffect(() => {
        const fetchdata = () => {
            const data = fetch("https://my-json-server.typicode.com/typicode/demo/comments")
            data.then((item)=>{
               return item.json();
            }).then((result)=>{
                if(result){
                    setapiItem(result);
                }
            });
        }
        fetchdata();
    }, []);

  return (
    apiItem.map((value ) => (
        <div key={value.id}>
            <h2>API data fetching</h2>
            <h2>{value.body}</h2>
            
        </div>
    ))
  )
}

