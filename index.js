function scuberGreetingForFeet(ride){
  // Write your code here!
  
  let result;

  if (ride <= 400) {
      result = 'This one is on me!';
  } else if (ride >= 2000){
      result = 'I will gladly take your thirty bucks.';
  } if (ride >= 2500) {
      result = 'No can do.';
  }
    return result

}

function ternaryCheckCity(city){
  // Write your code here!

  const destinationCity = city === "NYC" ? "Ok, sounds good." : "No go.";

  return destinationCity;
}


function switchOnCharmFromTip(greeting){
  // Write your code here!
  let response;

  switch (greeting) {
    case 'generous':
        response = 'Thank you so much.';
        break;
    case 'not as generous':
        response = 'Thank you.';
        break;
    default:
        response = 'Bye.'
  }

  return response
}

