import { useState } from "react";

export default function LudoBoard() {
    // const [blue, setBlue] = useState(0);
    // const [yellow, setYellow] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [red, setRed] = useState(0);
    const [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });
    function updateBlue() {
        // moves.blue+=1;
        console.log(`moves.blue=${moves.blue}`);
        // setMoves({...moves,blue:moves.blue+1});
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1}
        })
    }
    function updateYellow() {
        // moves.blue+=1;
        console.log(`moves.blue=${moves.yellow}`);
        // setMoves({...moves,blue:moves.blue+1});
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1}
        })
    }
    function updateGreen() {
        // moves.blue+=1;
        console.log(`moves.blue=${moves.green}`);
        // setMoves({...moves,blue:moves.blue+1});
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1}
        })
    }
    function updateRed() {
        // moves.blue+=1;
        console.log(`moves.blue=${moves.red}`);
        // setMoves({...moves,blue:moves.blue+1});
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1}
        })
    }
    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <h3>Blue moves:{moves.blue}</h3>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <h3>Yellow moves:{moves.yellow}</h3>
                <button onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
                <h3>Green moves:{moves.green}</h3>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <h3>Red moves:{moves.red}</h3>
                <button onClick={updateRed} style={{backgroundColor:"red"}} >+1</button>
            </div>
        </div>
    );
}