// Code your solution in this file!
function distanceFromHqInBlocks(customerLocation) {
  const hqLocation = 42
  return Math.abs(customerLocation - hqLocation);
}

function distanceFromHqInFeet(customerLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(customerLocation);
  const blockFeet = 264;  
  return distanceInBlocks * blockFeet;
}

function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(start - destination);
  const blockFeet = 264;  
  return distanceInBlocks * blockFeet;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
    return 0;  
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;  
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; 
  } else {
    return 'cannot travel that far';  
  }
}