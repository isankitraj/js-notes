"use strict";

const answerPollbtn = document.querySelector(".btn");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const msg = `${this.question}\n${this.options.join('\n')}\n(Write option number)`

    const input = Number(prompt(msg));

    if (input <= this.answers.length - 1) {
      this.answers[input]++;
      this.displayResults();
    } else {
      console.log("Not a valid option!");
    }
  },

  displayResults(type='array') {
    if (type === "string".toLowerCase()) {
      console.log(`Poll results are ${this.answers.join(", ")}.`);
    } else if (type === 'array'.toLowerCase()) {
      console.log(this.answers);
    }
  },
};


answerPollbtn.addEventListener("click", poll.registerNewAnswer.bind(poll));



// [5,2,3]
// [1,5,3,9,6,1]
poll.displayResults.call({answers: [5,2,3]}, 'string')