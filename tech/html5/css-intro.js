export default {
  label: 'CSS - Intro',
  id: 'css-intro',
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
            text: `Margin can be negative number.
We can create animation using CSS.`
          },
          {
            name: 'False',
            text: `Padding can be negative numbers.
We can write conditional statements using CSS.
Writing inline CSS is the best practice.`
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
              qText: `CSS stands for _________.`,
              options: `Cascading Style Sheet
Computer Style Sheet
Colorful Style Sheet
Creative Style Sheet`
            },
            {
              qText: `How do we define a stylesheet?`,
              options: `&lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;
&lt;stylesheet&gt;styles.css&lt;/stylesheet&gt;
&lt;style src="styles.css"&gt;`
            },
            {
              qText: `Which is the right place to refer a stylesheet?`,
              options: `&lt;head&gt; section
&lt;body&gt; section
end of the document`
            },
            {
              qText: `Which HTML attribute is used to define inline styles?`,
              options: `style, styles, class`
            },
            {
              qText: `Which is the correct syntax?`,
              options: `body {color: red;}
{body: color = red;}
body {color: red};`
            }
          ]
        },
        {
          questions: [
            {
              qText: `Which is a valid comment in css?`,
              options: `/* comment */
// comment
&lt;!-- comment --&gt;`
            },
            {
              qText: `Which property is used to change the background color?`,
              options: `background-color
backgroundColor
color
bgcolor`
            },
            {
              qText: `Which property is used to change the text color?`,
              options: `color
text-color
foreground-color`
            },
            {
              qText: `Which property is used to set the text size?`,
              options: `font-size
text-size
font-style
text-style`
            },
            {
              qText: `Which of the following is valid?`,
              options: [
                `<pre><code class="language-css">.display {
font-weight: bold;
}</code></pre>`,

                `<pre><code class="language-css">.display {
font-style: bold;
}</code></pre>`,

                `<pre><code class="language-css">.display {
text-style: bold;
}</code></pre>`,

                `<pre><code class="language-css">.display {
text-size: bold;
}</code></pre>`
              ]
            }
          ]
        },
        {
          questions: [
            {
              qText: `How do you display hyperlink without an underline?`,
              options: `a {text-decoration: none;}
a {decoration: no-underline;}
a {decoration: none;}
a {underline: none;}`
            },
            {
              qText: `How do you make each word in a text start with a capital letter?`,
              options: `text-transform: capitalize;
text-style: capitalize;
transform: capitalize;
CSS doesn't support this.`
            },
            {
              qText: `Which property is used to change the font of an element?`,
              options: `font-family, font-weight, font-style`
            },
            {
              qText: `<p>How do you display a border like this:</p>
<ul>
<li>The top border = 10 pixels
<li>The bottom border = 5 pixels
<li>The left border = 20 pixels
<li>The right border = 1 pixel?
</ul>`,
              options: `border-width: 10px 1px 5px 20px;
border-width: 10px 5px 20px 1px;
border-width: 20px 10px 1px 5px;`
            },
            {
              qText: `Which property is used to change the left margin of an element?`,
              options: `margin-left
left-margin
indent
indent-left`
            }
          ]
        },
        {
          questions: [
            {
              qText: `How do you select an element with id 'demo'?`,
              options: `#demo
.demo
>demo
demo`
            },
            {
              qText: `How do you select elements with class name 'test'?`,
              options: `.test
#test
>test
test`
            },
            {
              qText: `How do you select all paragraph elements inside a div element?`,
              options: `div p
div.p
div + p`
            },
            {
              qText: `How do you use group selectors?`,
              options: `Separate each selector with comma
Separate each selector with space
Separate each selector with dot`
            },
            {
              qText: `What is the default value of the position property?`,
              options: `static
relative
fixed
absolute`
            }
          ]
        }
      ]
    }
  ]
};
