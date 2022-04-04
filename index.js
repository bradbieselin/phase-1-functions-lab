// Code your solution in this file!
function distanceFromHqInBlocks (pickUpLocation) {
    const hqLocation = 42;

    if(pickUpLocation >= hqLocation) {
        return pickUpLocation - hqLocation;
    } else {
        return hqLocation - pickUpLocation;
    }
}

function distanceFromHqInFeet (pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if(destination > start) {
        const blocksTravelled = destination - start;
        return blocksTravelled * 264;
    } else {
        const blocksTravelled = start - destination;
        return blocksTravelled * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    
    if(distanceTravelled < 400) {
        return 0;
    } else if(distanceTravelled > 400 && distanceTravelled < 2000) {
        distanceTravelled -= 400;
        return distanceTravelled * 0.02;
    } else if(distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25;
    } else if(distanceTravelled > 2500){
        return 'cannot travel that far';
    }
} 