import React from 'react'
// const name= "Amila";
// const position = "Software Engineer";
// const city = "Colombo";


//     const myObj = {
//         name: `${name}`,
//         position: `${position}`,
//         city: `${city}`
//     }



function Main({children,image,name,position,city}) {
    // const {city} = myObj;

  return (
   <div className="block">
      <div><img src={image? `${image}`:`https://upload.wikimedia.org/wikipedia/commons/6/65/Blue_morpho_butterfly.jpg`} alt="card-image" /></div>
        <ul>
            <li>{!name?`no-name`:`${name}`}</li>
            <li>{position}</li>
            <li>{city}</li>
            <li>react</li>
           {/* <li> {props.children}</li> */}
        
        </ul>
        {}
    </div>
  )
}

export default Main