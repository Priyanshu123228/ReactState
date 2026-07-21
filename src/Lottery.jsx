import { useState } from "react"

export default function Lottery() {
    const [ticket, setTicket] = useState([0, 0, 0]);
    function generateTicket() {
        let randomNumber = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),

        ];
        setTicket(randomNumber);
    }
    function getSum(arr) {
        return arr[0] + arr[1] + arr[2];
    }
    console.log(getSum(ticket));
    let isWinner = getSum(ticket) === 15;
    return (
        <div>
            <h1>Lottery Game</h1>
            <h2>Ticket:{ticket}</h2>

            {isWinner ? <h2>🎉 Congratulations! You Won</h2> : <h2>Better Luck Next Time</h2>}
            <button onClick={generateTicket}>Get New Ticket</button>
        </div>
    )
}