//not my solution
function userNumber(n){
    return n.toString(8).replace(/[4567]/g, c => +c + 1);
}

console.log(userNumber(63))