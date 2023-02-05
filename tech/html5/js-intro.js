export default {
  label: 'Javascript Intro',
  id: 'js-intro',
  list: [
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'Classify these sentences as true or false.',
        types: [
          {
            name: 'True',
            text: `JavaScript is a case sensitive language.
We can change the HTML content and CSS styles using javascript.`
          },
          {
            name: 'False',
            text: `The external JavaScript file must contain the <script> tag.
JavaScript is a subset of Java.
Javascript does not work in the backend.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Question',
      type: 'mcqAdvanced',
      id: 'test',
      commonData: {
        title: 'Multiple Choice Question'
      },
      data: [
        {
          questions: [
            {
              qText: `Inside which HTML element do we put the JavaScript?`,
              options: `&lt;script&gt;
&lt;js&gt;
&lt;javascript&gt;
&lt;scripting&gt;`
            },
            {
              qText: `<p>What is the correct JavaScript syntax to change the content of the HTML element below?</p>
<pre><code class="language-css">
&lt;p id="greet">Good Night&lt;/p></code></pre>`,
              options: `document.getElementById("greet").innerHTML = "Good Morning"
document.getElement("greet").innerHTML = "Good Morning"
document.getElementById("#greet").innerHTML = "Good Morning"
document.getElement("#greet").innerHTML = "Good Morning"`
            },
            {
              qText: `What is the correct syntax for referring to an external script called "script.js"?`,
              options: `&lt;script src="script.js"&gt;
&lt;script href="script.js"&gt;
&lt;script name="script.js"&gt;`
            },
            {
              qText: `How do you write "Good Morning" in an alert box?`,
              options: `alert("Good Morning")
msg("Good Morning")
alertBox("Good Morning")
msgBox("Good Morning")`
            },
            {
              qText: `How do you create a function in JavaScript?`,
              options: `function myFun()
function:myFun()
function = myFun()`
            }
          ]
        },
        {
          questions: [
            {
              qText: `What is the correct way to write a JavaScript array?`,
              options: `var colors=['red', 'green', 'blue'];
var colors={'red', 'green', 'blue'};
var colors=('red', 'green', 'blue');`
            },
            {
              qText: `How do you round the number 9.25, to the nearest integer?`,
              options: `Math.round(9.25)
round(9.25)
Math.rnd(9.25)
rnd(9.25)`
            },
            {
              qText: `Which event occurs when the user clicks on an HTML element?`,
              options: `onclick
onchange
onmouseover
onmouseclick`
            },
            {
              qText: `<p>What is the output of the below code?</p>
<pre><code class="language-js">let a = Math.max(100, 300);
let b = Math.min(200, 100);
let c = Math.min(a, b);
let d = Math.max(a, b);
console.log(c + d);</code></pre>`,
              options: `400, 200, 300, 100`
            },
            {
              qText: `<p>What is the output of the below code?</p>
<pre><code class="language-js">let a = 0;
for(let i = 0; i < 10; i=i+3){
a += i
}
console.log(i)</code></pre>`,
              options: `18, 16, 9, 45`
            }
          ]
        }
      ]
    },

    {
      label: 'Multiple Choice Question',
      type: 'mcqAdvanced',
      id: 'test',
      commonData: {
        title: 'Multiple Choice Question'
      },
      data: [
        {
          questions: [
            {
              qText: `<p>What is the output of the below code?</p>
<pre><code class="language-js">let a = '100';
let b = 200;
console.log(a + b);</code></pre>`,
              options: `100200, 300, NaN, Error`
            },
            {
              qText: `<p>What is the output of the below code?</p>
<pre><code class="language-js">let x = 100;
let y = true;
console.log(x + y);</code></pre>`,
              options: `201, 100true, NaN, 100`
            },
            {
              qText: `<p>What is the range of the random number, the below snippet create?</p>
<pre><code class="language-js">Math.ceil(Math.random() * 100 + 100);</code></pre>`,
              options: `101 - 201, 1 - 100, 100 - 200, 101 - 200`
            },
            {
              qText: `<p>What is the output of the below code?</p>
<pre><code class="language-js">let a = [100, 200, 300];
let b = a;
b[1] = 2;
a[2] = 3;
console.log(a);</code></pre>`,
              options: `[100, 2, 3]
[100, 200, 3]
[100, 200, 300]
Error`
            }
          ]
        }
      ]
    }
  ]
};
