// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// window.onload = function() {
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "telecom", "puedes"];
let extensions = [
  `es`,
  `uy`,
  `ve`,
  `ar`,
  "com",
  `co`,
  `pe`,
  `it`,
  `mx`,
  `br`,
  `py`
];
let dominios = [];
pronoun.forEach(start => {
  adj.forEach(mid => {
    noun.forEach(last => {
      extensions.forEach(ex => {
        let domain = `${start}${mid}${last}.${ex}`;
        if (last.endsWith(ex)) {
          let domainHack = `${start}${mid}${last.slice(
            0,
            -1 * ex.length
          )}.${ex}`;
          dominios.push(domainHack);
        } else {
          dominios.push(domain);
        }
        console.log(dominios);
      });
    });
  });
});
