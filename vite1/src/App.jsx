

import './App.css'
import Funct1 from './Pages/Funct1';
import Funct2 from './Pages/Funct2';
import List from './Pages/newpages/newComponents/List';
import ToDoList from './Pages/newpages/ToDoList';

function App() {

const title = 'React'

const welcome = {
greeting: 'Hey',
title2: 'React2',
};

function getTitle(title3) {
return title3;


}
  return (
    <>
   <div><h1>revision of React</h1>
   <h2>{title}</h2>
   <label htmlFor="search">Search: </label>
<input id="search" type="text" />
   </div>

   <h3>
{welcome.greeting} {welcome.title2}
</h3>

<h4>This is from a function return:{getTitle('React3')}</h4>
<button id="button">Click me</button>

<ToDoList />
list component


<List />

  {/* <br />
 <Funct1 />
   <br />
   <Funct2/> */}

    </>
  

  )
}

export default App
