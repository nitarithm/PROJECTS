function friendName(friend) {
    // return friend.name; // before

    // after
    if(friend === undefined) {
        return undefined;
    } else {
        return friend.name;
    }
}

module.exports = friendName;