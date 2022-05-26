// Code your solutions in this file
function writeCards(names, holiday) {
  const message = [];
  for(let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
  };
  console.log(message);
  return message;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(numb) {
  while(numb >= 0) {
    console.log(numb--);
  }
}

countDown(10);