import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

const names = ["Michael", "Ryan", "Tyler"];
const nameLengths = names.map(name => name.length);

console.log(names);
console.log(nameLengths);

/* 
Use the provided music data array and the .map() method to create a new array that contains items in the format:
  <album-name> by <artist> sold <sales> copies
  Store the new array in an albumSalesStrings array. So the first item in the albumSalesStrings array should be "25 by Adele sold 1731000 copies" 
*/
const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 }
];

const albumSalesStrings = musicData.map(
  album => `${album.name} by ${album.artist} sold ${album.sales} copies)\n`
);

console.log(albumSalesStrings);

/* Using .filter()
 *
 * Using the musicData array and .filter():
 *   - return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - store the returned data in a new `results` variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 */

const results = musicData.filter(
  album => album.name.length >= 10 && album.name.length <= 25
);
console.log(results);

/* Combining .filter() and .map()
 *
 * Using the musicData array, .filter, and .map():
 *   - filter the musicData array down to just the albums that have
 *     sold over 1,000,000 copies
 *   - on the array returned from .filter(), call .map()
 *   - use .map() to return a string for each item in the array in the
 *     following format: "<artist> is a great performer"
 *   - store the array returned form .map() in a new "popular" variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 */

const popular = musicData
  .filter(album => album.sales > 1000000)
  .map(album => `${album.artist} is a 1M+ selling performer\n`);

console.log(popular);

const element = React.createElement(
  "div",
  { className: "welcome" },
  "Hello world"
);
ReactDOM.render(element, document.getElementById("root"));
