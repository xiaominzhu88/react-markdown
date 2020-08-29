import React, { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import MarkdownHtml from './MarkdownHtml';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown/with-html';
import './App.scss';

const htmlText =
  '<a href="https://en.wikipedia.org/wiki/HTML">HTML Link</a> \n\n<strong>BOLD</strong>\n\n<em>Emphasis</em>\n\n<ol>List\n<li>List item1</li>\n<li>List item2</li>\n</ol>';

const markdownText =
  '# Hello \n\nBold and emphasized: **_bold_** \n\nLine Through: ~~line through~~\n\nLinks: [links to https](https://hello.me)\n\n- [ ]  Checkbox';

export default function MarkdownPreviewer() {
  const [shouldShowHtml, setShouldShowHtml] = useState(false);
  const [inputHtmlText, setInputHtmlText] = useState(htmlText);
  const [inputText, setInputText] = useState(markdownText);

  function toggleMarkdown() {
    setShouldShowHtml(!shouldShowHtml);
  }
  return (
    <div className="markdown">
      <div className="toggleButton">
        <button
          className="mdButton"
          size="small"
          theme="secondary"
          onClick={toggleMarkdown}
        >
          {!shouldShowHtml ? 'To Html editor' : 'To Markdown editor'}
        </button>
      </div>
      <div className="preview">Edit your Text</div>
      <div className="preview">
        {!shouldShowHtml ? (
          <MarkdownInput
            updateTextForMarkdown={(e) => setInputText(e.target.value)}
            inputText={inputText}
          />
        ) : (
          <MarkdownHtml
            updateHtmlForMarkdown={(e) => setInputHtmlText(e.target.value)}
            inputHtmlText={inputHtmlText}
          />
        )}
      </div>
      <hr />
      <div className="preview">
        {shouldShowHtml ? 'Html Preview' : 'Markdown Preview'}
      </div>
      {!shouldShowHtml ? (
        <Markdown className="mdPreview" source={inputText} />
      ) : (
        <ReactMarkdown
          className="htmlPreview"
          source={inputHtmlText}
          escapeHtml={false}
        />
      )}
    </div>
  );
}
