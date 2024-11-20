const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let firstname, lastname, age, hobbies;

fs.readFile('firstname.txt', 'utf-8')
  .then(data => {
    firstname = data.trim(); 
    return fs.readFile('lastname.txt', 'utf-8');
  })
  .then(data => {
    lastname = data.trim();
    return fs.readFile('age.txt', 'utf-8');
  })
  .then(data => {
    age = data.trim();
    return fs.readFile('hobbies.txt', 'utf-8');
  })
  .then(data => {
    hobbies = JSON.parse(data);
    console.log(`THEN-CATCH: ${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
  })
  .catch(err => {
    console.error(err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

const readFiles = async () => {
  
      const firstname = await fs.readFile('firstname.txt', 'utf-8');
      const lastname = (await fs.readFile('lastname.txt', 'utf-8'));
      const age = (await fs.readFile('age.txt', 'utf-8'));
      const hobbies = JSON.parse(await fs.readFile('hobbies.txt', 'utf-8')); 
  
      console.log(`ASYNC/AWAIT: ${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
    
  };

  readFiles();