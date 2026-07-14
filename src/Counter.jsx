// import { useState } from "react";

// export default function Counter(){
//     let [count,setCount]=useState(0);
    
//     function counterIncrease(){
//         setCount(count+1);
//         console.log(count);
//     }
//     return (
//         <div>
//             <h3>count={count}</h3>
//             <button onClick={counterIncrease}>Increase count</button>
//         </div>
        
//     );
// }
// import { useState } from "react";


//  export default function Counter(){
//     const [count,setCount]=useState(0);

//     function increaseCount(){
//         setCount(count+1)
//         console.log(count);
//     }
//     return(
//         <>
//             <h1>{count}</h1>
//             <button onClick={increaseCount}>+</button>
//         </>
//     )
//  }

import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0);
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>

        </>
    )
}