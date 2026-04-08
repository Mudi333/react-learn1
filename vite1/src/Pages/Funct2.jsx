import "../App.css";
 
import Main from "../Componets/Main.jsx";
import myData from "../Data/myData.js";
import { useState } from "react";

let myVar = "muditha";
// const clickHandle = () => {myVar = 'amila'
// console.log('clicked',myVar);

function Funct2() {
  const [count, setCount] = useState({ name: "amila", city: "colombo" });
  const [inputVal, setInputVal] = useState(0);

  const clickHandle = () => {
    // setCount("amila");
    // console.log("clicked", myVar);
    setTimeout(()=>{
      console.log('clicked',myVar); 
       setInputVal((prev)=> prev+1);

    },3000)
   
  };

  console.log("inputVal", inputVal);
  const MainBlock = myData?.map(({ name, city, position, id }) => {
    return <Main key={id} name={name} city={city} position={position}></Main>;
  });



  const inputChangeHandle = (event,data) => {event.preventDefault();
    console.log(data)
    setInputVal(event.target.value);
  }

  return (
    <>
      <h1>React Concept bulding</h1>
      <h3>Object looping from data</h3>
      <p> This project explain the simple concept of React </p>
      {myData?.map(({ name, city, position, id }) => {
        return (
          <Main key={id} name={name} city={city} position={position}></Main>
        );
      })}
      <h3>main import but didnt give any data as props</h3>
      <Main>{/* <h3>Children concept in a Components</h3> */}</Main>
      <h3>Main component change the </h3>
      <Main name="Amila" position="Developer" city="Colombo" />
      <Main name="Amila2" position="Web Developer" city="Colombo2" />
      <Main name="Amila3" position="App Developer" city="Colombo3" />
      <div className="main_Container">
        <h3>mainblock methoud</h3>
        <div className="mainBlock_container">{MainBlock}</div>
      </div>

      <div className="mainBlock">
        {/* <h3 >CSS Flexbox Example</h3>  */}
        <div className="mainBlock">
          {myData?.map(({ name, city, position, id }, index) => (
            <Main
              key={id + index}
              name={name} 
              city={city}
              position={position}
            />
          ))}
        </div>
      </div>
      <div>
        <h1>{myVar}</h1>
        <h1>{inputVal}</h1>
        <button
          style={{ fontSize: "16px", padding: "8px 16px" }}
          onClick={clickHandle}
        >
          click me
        </button>
        <br />
        <br />
        <h2>text</h2>
        <input
          style={{ border: "1px solid red", padding: "14px" }}
          type="text"
          placeholder="Enter text here"
          onChange={(e) => {
            inputChangeHandle(e,inputVal,'additional data');
            // e.preventDefault();
            // setInputVal(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default Funct2