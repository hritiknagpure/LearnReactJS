import { useState } from "react";

function App() {
  let[count,setcount]=useState(1)
  let fun=()=>{ 
    if(count<20){
      setcount(count+1);
    }
    else{
      console.log("counter cannot go above");
    }
     
  }
  let[min,setminius]=useState(15)
  let chan=()=>{
    if(min>0){
      setminius(min-1);
    }
    else{
      console.log("not above minius");
    }

  }
return(
  <>
  <center><h1>hello :{min}</h1></center>
  <center><h1>hello:{count}</h1></center>

  <button onClick={chan}>click one</button>
  <br />
  <button onClick={fun}>click two</button>
  </>
); 
};

export default App
