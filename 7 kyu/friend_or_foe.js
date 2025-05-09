function friend(friends){
    return friends.filter(el => el.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))