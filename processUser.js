function processUser(user, callback) {
    return callback(user);
}

const result = processUser(
    "Wahab",
    name => name.toUpperCase()
);

console.log(result);