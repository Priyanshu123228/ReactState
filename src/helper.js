function generateTicket() {
    return [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
    ];
}

function getSum(arr) {
    return arr[0] + arr[1] + arr[2];
}

export { generateTicket, getSum };