// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num =4){
    let multiplier = fare => fare * num;
    return multiplier
}

const fareDoubler =createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray,action){
    return action(driversArray)
}