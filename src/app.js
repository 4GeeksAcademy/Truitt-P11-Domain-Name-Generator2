/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Truitt from the console!");

  //create arrays here

  let pronoun = ["the", "our", "they", "we"];
  let adj = ["great", "big", "beautiful", "dazzling"];
  let noun = ["jogger", "raccoon", "lion", "giraffe"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
