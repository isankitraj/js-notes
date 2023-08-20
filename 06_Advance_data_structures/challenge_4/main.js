'use strict';

// creating elements.
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


// declaring variables
const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
button.textContent = 'Click here';
textArea.rows = 10;
textArea.cols = 50;


// creating function
const textConvert = function () {
    const text = textArea.value;
    textArea.value = '';
    const arr = text.split('\n');
    const ans = []
    for (let [index,word] of arr.entries()) {

        const lowerword = word.toLowerCase().trim();
        const [first,second] = lowerword.split('_');  // this will return an array so we can destructure it immediately.
        const finalWord = (first + second.replace(second[0],second[0].toUpperCase()));
        // adding ticks and padding
        const spacePadding = finalWord.padEnd(20,' ') // to make all the string content equal 
        const tick = '✅'.repeat(index + 1)

        ans.push(spacePadding.concat(tick))
    }
    textArea.value = ans.join('\n');
}


button.addEventListener('click', textConvert)


// test case -- paste it in textarea.
`
 underscore_case
first_name
Some_Variable 
  calculate_AGE
delayed_departure
`