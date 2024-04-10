console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "The Social-Media Post";
const textSocial =
  " This could be an example of a text inside the textSocial variable! ";
let likes = 7;
const user = " Hans-Dieter ";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title + textSocial + likes + user + isReported);
likes++;
console.log(likes);
// --^-- write your code here --^--
