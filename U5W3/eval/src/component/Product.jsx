import React from 'react'

export const Product = ({first , setFirst}) => {

    const getData = ()=>{
        fetch("http://localhost:3000/prod")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setFirst(res);
            console.log(res);   
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }
    
  return (
    <div>
      <div>
          <table border="1">
              {first.map((el)=>{
                  return(
                      <>
                      <tr>{el.id}</tr>
                      <tr>{el.title}</tr>
                      <tr>{el.cost}</tr>
                      <tr>{el.category}</tr>
                      <tr>{el.image}</tr>
                      </>
                  )
              })}
          </table>
      </div>

      <div>
          <button onClick={getData}>Fetch Data</button>
      </div>
     
    </div>
  )
}
