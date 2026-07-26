import { useEffect, useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);  //initialization
    // console.log("component is rendered");
    console.log(`count is : ${count}`);
    
    function counterIncrease(){
        // setCount(count+1);
        setCount((currCount)=>{
            return currCount+1;
        });
    }
         useEffect(function printSomething(){
            console.log("this is the side effect");
        },[]);

    return (
        <div>
            <h3>count={count}</h3>
            <button onClick={counterIncrease}>+1</button>
        </div>
    );
}




// import { useState } from "react";

// export default function Counter(){
//     const [count,setCount]=useState(0);
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>+</button>
//         <button onClick={()=>setCount(count-1)}>-</button>

//         </>
//     )
// }