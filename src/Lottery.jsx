import { useState } from "react"; 
import { generateTicket, getSum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}) {
    const [ticket, setTicket] = useState(generateTicket(n));

    function buyTicket() {
        setTicket(generateTicket(n));
    }

    const isWinner = getSum(ticket) === winningSum;

    return (
        <div className="ticket">
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>

            {isWinner ? (
                <h2>🎉 Congratulations! You Won</h2>
            ) : (
                <h2>Better Luck Next Time</h2>
            )}

            <button onClick={buyTicket}>
                Get New Ticket
            </button>
        </div>
    );
}