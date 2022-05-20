/*
  Task:
    use an array of methods to transform an array of strings into a secret message
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 
                     'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
secretMessage[7] = 'easily';
secretMessage.shift();
secretMessage.unshift('Programming'); //adds word to the front of an array

secretMessage.splice(6, 10, 'know');

console.log(secretMessage.join(' ')); //join made it a sentence
