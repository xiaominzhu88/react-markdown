/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import Markdown from './Markdown.js';
let marked = require('marked');

const initialText =
  '# React Markdown Previewer! \n\n## This is a sub-heading... \n\nBold Text:  **_bold!!_** \n\nLine Through: ~~crossing stuff out~~ \n\nLinks: [links](https://ashusingh.me) \n\n> Block Quotes! \n\n- [ ] Checkbox';

export default function App() {
  const [markdown, setMarkdown] = useState(initialText);

  const appStyle = css`
    padding: 1.5em;
    margin: 0 auto;
    background-color: beige;
    @media (max-width: 600px) {
      padding: 2em;
    }
  `;

  const h1Style = css`
    font-size: 2.5em;
    font-family: monospace;
    text-align: center;
    color: #b517d0;
    text-shadow: 2px 3px 5px #93cad1;
    @media (max-width: 600px) {
      font-size: 1.5em;
    }
  `;
  const divStyle = css`
    text-align: center;
    height: 2em;
    font-family: monospace;
    background-color: #109daf;
    width: 40%;
    color: #fff;
    margin: 2em auto;
    border-radius: 5px;

    @media (max-width: 600px) {
      padding: 0;
      font-size: 0.8em;
      height: 3.5em;
    }
  `;

  const updateMarkdown = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App" css={appStyle}>
      <h1 css={h1Style}>React Markdown-Previewer</h1>
      <div css={divStyle}>
        <h3 className="input">Markdown Input Field</h3>
      </div>

      <Markdown
        updateMarkdown={updateMarkdown}
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        value={markdown}
      />
    </div>
  );
}
