// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// window.onload = function() {
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let dominios = [];

pronoun.forEach(start => {
  adj.forEach(mid => {
    noun.forEach(last => {
      console.log(`${start}${mid}${last}.com`);
      dominios.push(`${start}${mid}${last}.com`);
    });
  });
});
console.log(dominios);
