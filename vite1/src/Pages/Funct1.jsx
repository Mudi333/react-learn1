// import React from 'react'
// import { useState } from 'react';
// const myData = [
//       {id:1, name:'Alice'},
//       {id:2, name:'Bob'},
//       {id:3, name:'Charlie'}
//     ]


// function Funct1() {
//   const [count, setCount] = useState(0)

//   const handleClick =() => {
//     setCount(count +1)

   
//   }
//           function Names(id, name){ return {id, name}
         
// }
//   const user= Names(1, 'Alice')
 


//   return (
//     <>
//       <h1>BRUSH UP REACT KNOWLAGE FOR tECH QUESTIONS</h1>
//       <H2>Differance functions and components </H2>
//       <div>
//         <button onClick={handleClick} >Click me</button>
//         <p>Count: {count}</p>
//       </div>
//       <div>
//         <h3>data importing </h3>
      
//         <ul>
         
   
     
//          <li>{user.name}</li>
         
//           <li>{myData[1].name}</li>
//           <li>{myData?.map(({id,name}) =>{ return <li key={id}>{name}</li>})}</li>
//         </ul>
        
//       </div>
//     </>
//   )
// }

// export default Funct1

import React from 'react'
import { useState } from 'react';

const myData = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

function Funct1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  function Names(id, name) {
    return { id, name };
  }

  const user = Names(1, 'Alice');

  return (
    <>
      <h1>BRUSH UP REACT KNOWLAGE FOR tECH QUESTIONS</h1>

      {/* FIXED HERE */}
      <h2>Difference functions and components</h2>

      <div>
        <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
      </div>

      <div>
        <h3>data importing</h3>
        <ul>
          <li>{user.name}</li>
          <li>{myData[1].name}</li>

          {/* FIXED HERE */}
          {myData.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Funct1;