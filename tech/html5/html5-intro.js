export default {
  label: 'HTML - Intro',
  id: 'html5-intro',
  list: [
    {
      id: 'match',
      label: 'Color Code',
      type: 'match',
      data: {
        title: 'Match Colors with Hex Code',
        fontSize: '1rem',
        text: `White, #edf9fa
          Blue, #1005fb
          Green, #0aef0f
          Red, #f9090f
Black, #10010a`
      }
    },
    {
      label: 'Fill in the Blanks',
      type: 'matchByDragDrop',
      id: 'fill-up-story',
      lockAfter: 1,
      data: {
        title: 'Fill in the Blanks by dragging the words given at the bottom.',
        text: `*HTML* is used to define the content and *CSS* is used to style the content in a Web Page.
We use *Javascript* to write the business logic for our Web Page.
*Native* apps need to be installed whereas we can use *Web* apps without installing them.`
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'Classify these sentences as true or false.',
        types: [
          {
            name: 'True',
            text: `It is possible to store data locally in a Web App.
It is a good practice to have the CSS in a seperate file.
Inline elements are normally displayed without starting a new line.
It is possible to insert a website in a web page.`
          },
          {
            name: 'False',
            text: `Web app can access the local File System.
            We cannot embed SVG elements in a HTML page.`
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
              qText: `Who is making the Web standards?`,
              options: `The W3 Consortium 
            The W3Schools 
            Google 
            Mozilla`
            },
            {
              qText: `Which tag do we use to get the largest heading?`,
              options: `&lt;h1&gt;	
           &lt;h6&gt;	
           &lt;head&gt;	
           &lt;heading&gt;	`
            },
            {
              qText: `Which tag is used for line break?`,
              options: `&lt;br&gt;
            &lt;break&gt;
            &lt;\\n&gt;
            &lt;line-break&gt;`
            },
            {
              qText: `Which tag is used to provide a background color?`,
              options: `&lt;body style="background-color:red;"&gt;
            &lt;body bg="red"&gt;
            &lt;body backgroundColor="red"&gt;`
            },
            {
              qText: `Which tag is used to create hyperlink?`,
              options: `&lt;a href="https://pschool.in"&gt;PSchool&lt;/a&gt;
            &lt;a url="https://pschool.in"&gt;PSchool&lt;/a&gt;
            &lt;a url="https://www.pschool.in"&gt;PSchool&lt;/a&gt; 
            &lt;a url="www.pschool.in"&gt;PSchool&lt;/a&gt;`
            }
          ]
        },
        {
          questions: [
            {
              qText: `Which character is used to indicate an end tag?`,
              options: `/, &lt;, ^, \\*`
            },
            {
              qText: `How can you open a link in a new window?`,
              options: `&lt;a href="..." target="_blank"&gt;
          &lt;a href="..." target="_new"&gt;
          &lt;a href="..." target="blank"&gt;
          &lt;a href="..." target="new"&gt;`
            },
            {
              qText: `Which set of tags is used to represent a table?`,
              options: `&lt;table&gt;&lt;tr&gt;&lt;td&gt;
          &lt;thead&gt;&lt;body&gt;&lt;tr&gt;
          &lt;thead&gt;&lt;body&gt;&lt;tr&gt;`
            },
            {
              qText: `Which tag is used to create a numbered list?`,
              options: `&lt;ol&gt;
          &lt;ul&gt;
          &lt;list&gt;`
            },
            {
              qText: `Which tag is used to create a checkbox?`,
              options: `&lt;input type="checkbox"&gt;
          &lt;input type="check"&gt;
          &lt;check&gt;
          &lt;checkbox&gt;`
            }
          ]
        },

        {
          questions: [
            {
              qText: `Which tag is used to create a dropdown list?`,
              options: `&lt;select&gt;
              &lt;input type="list"&gt;
              &lt;list&gt;
              &lt;input type="dropdown"&gt;`
            },
            {
              qText: `Which tag is used to create a multi line text input?`,
              options: `&lt;textarea&gt;
              &lt;input multiline="true"&gt;
              &lt;input type="textarea"&gt;`
            },
            {
              qText: `Which tag is used to insert an image?`,
              options: `&lt;img src="photo.jpg" alt="Profile Pic"&gt;
              &lt;img alt="Profile Pic"&gt;photo.jpg&lt;/img&gt; 
              &lt;image src="photo.jpg" alt="Profile Pic"&gt;`
            },
            {
              qText: `How do we add comment in html?`,
              options: `&lt;!-- .... --&gt;
              /* .... */ 
              // -----`
            },
            {
              qText: `How doc type is defined in html?`,
              options: `&lt;!DOCTYPE html&gt;
              &lt;!DOCTYPE html5&gt;
              &lt;!DOCTYPE type="html"&gt;
              &lt;!DOCTYPE type="html5"&gt;`
            }
          ]
        },
        {
          questions: [
            {
              qText: `Which tag is used to embed a video file?`,
              options: `&lt;video&gt;
              &lt;media&gt;
              &lt;movie&gt;`
            },
            {
              qText: `Which tag is used to embed an audio file?`,
              options: `&lt;audio&gt;
              &lt;media&gt;
              &lt;sound&gt;`
            },
            {
              qText: `In HTML, onblur and onfocus are:`,
              options: `Event attributes 
              HTML elements 
              Style attributes`
            },
            {
              qText: `In HTML, Canvas element is used to __________.`,
              options: `draw graphics 
              add events 
              add programming`
            },
            {
              qText: `Which of the following is a valid tag?`,
              options: `&lt;nav&gt;
              &lt;navigator&gt;
              &lt;navigate&gt;`
            }
          ]
        }
      ]
    },
    {
      label: 'Classify as Requested',
      id: 'classify',
      type: 'group',
      data: [
        {
          title: 'Classify the below tags as valid or invalid html tag.',
          types: [
            {
              name: 'Valid',
              text: 'audio, video, canvas, span'
            },
            {
              name: 'Invalid',
              text: 'image, sound, jframe, h7, scan, foot'
            }
          ]
        },
        {
          title: 'Classify the below tags as inline or block.',
          types: [
            {
              name: 'Inline',
              text: 'span, img, em, strong, input, textarea'
            },
            {
              name: 'Block',
              text: 'div, h1, header, table, section, form'
            }
          ]
        },
        {
          title: 'Classify the below tags as Semantic or Not.',
          types: [
            {
              name: 'Semantic',
              text: 'footer, main, section, aside, nav'
            },
            {
              name: 'Not',
              text: 'i, b, span, div, img'
            }
          ]
        }
      ]
    }
  ]
};
