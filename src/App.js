import React, { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import Markdown from 'react-markdown';
import './App.scss';

export default function MarkdownPreviewer() {
  const markdownText =
    '# Hello \n\nBold and emphasized: **_bold_** \n\nLine Through: ~~line through~~\n\nLinks: [links to https](https://hello.me)\n\n- [ ]  Checkbox';

  const [inputText, setInputText] = useState(markdownText);

  return (
    <div className="markdown">
      <div className="preview">Edit your Text</div>
      <MarkdownInput
        className="inputPreview"
        updateTextForMarkdown={(e) => setInputText(e.target.value)}
        inputText={inputText}
      />
      <div className="preview">Markdown Preview</div>

      <Markdown className="mdPreview" source={inputText} />
    </div>
  );
}
