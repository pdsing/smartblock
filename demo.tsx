import * as React from 'react';
import { render } from 'react-dom';
import App from './src/';

render(<App html={`
<p>Hello World</p>
<h1>Test</h1>
<ul>
  <li>リスト1</li>
  <li>リスト2</li>
</ul>
`}
json={{
  type: 'doc',
  content: [
  {
    type: 'paragraph',
    content: [{
      type: 'text',
      text: 'Example Paragraph'
    }]
  }
]}}
onChange={({json, html}) => {
}}/>, 
document.querySelector('#app'));
