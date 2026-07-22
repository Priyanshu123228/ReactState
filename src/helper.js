  function generateTicket() {
        let randomNumber = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];
        setTicket(randomNumber);
    }
    export {generateTicket};