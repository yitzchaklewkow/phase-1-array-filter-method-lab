function findMatching(array, name) {
    return array.filter( element => name.toUpperCase() === element.toUpperCase());
}

function fuzzyMatch(array, str){
    return array.filter( element => element.startsWith(str));
}

function matchName(array, name){
    return array.filter( element => name.toUpperCase() === element.name.toUpperCase());
}