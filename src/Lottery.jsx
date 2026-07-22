import { useState } from "react";
import "./Lottery.css";
import { generateTicket, getSum } from "./helper";

export default function Lottery() {
    const [ticket, setTicket] = useState([0, 0, 0]);

    function buyTicket() {
        setTicket(generateTicket());
    }

    const isWinner = getSum(ticket) === 15;

    return (
        <div className="ticket">
            <h1>Lottery Game</h1>

            <h2>Ticket: {ticket.join(" ")}</h2>

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