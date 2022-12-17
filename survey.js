const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable. ', (name) => {
rl.question('What is an activity you like doing? ', (activity) => {
rl.question('What do you listen to while doing that? ', (song) => {
rl.question('What meal is your favourite (eg. Breakfast, Lunch, Dinner? ', (meal) => { 
rl.question('What is your favourite thing to eat for that meal', (food) => { 
rl.question('Which sport is your absolute favourite? ', (sport) => { 
rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => { 

console.log(`Hi ${name}, this is what you like doing for fun ${activity}, while listening to this track ${song}. Your favourite meal is ${meal}, after ${activity} you like is to eat ${food}. On Sunday's, you like watching ${sport} and you are super amazing at ${superpower}`);
rl.close();

});
});
});
}); 
});
}); 
});





