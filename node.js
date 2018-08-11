// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//require https module
const https = require("https");

//function to print out message
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript.`;
  console.log(message);
}

//function to get multiple usernames
function getProfile(username) {
  //connect to API url (https://teamtreehouse.com/username.json)
  const request = https.get(
    `https://wwwcsscteamtreehouse.com/${username}.json`,
    response => {
      let body = "";
      //Read the json data
      response.on("data", data => {
        body += data.toString();
      });

      response.on("end", () => {
        //parse the data
        const profile = JSON.parse(body);
        //print the data
        printMessage(
          username,
          profile.badges.length,
          profile.points.JavaScript
        );
      });
    }
  );

  request.on("error", error =>
    console.error(`Problem with request: ${error.message}`)
  );
}

//process argv get arguments (users) from the command line
//slice leaves off the first two repsonses returned that arent usernames.
const users = process.argv.slice(2);
users.forEach(getProfile);
