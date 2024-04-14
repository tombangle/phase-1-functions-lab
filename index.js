function distanceFromHqInBlocks(someValue) {
    console.log(someValue);
    let fourtyThree = 1;
    if (someValue > 42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let fourtyThree = 264
    if (someValue > 42) {
        return (someValue - 42) * 264
    } else {
        return (42 - someValue) * 264
    }
}
function distanceTravelledInFeet(start, destination) {
    console.log(start, destination)
    let fortyThreeFortyEight = 1320
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) *264
    }
}
function calculatesFarePrice(start, destination) {
    console.log(start, destination)
    let feet = 0
    if (start > destination) {
        feet = (start - destination) * 264
    } else {
        feet = ((destination - start) * 264)
    } if (feet < 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return 2.56
    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else {
        return `cannot travel that far`
    }
}