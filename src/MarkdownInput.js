import React from 'react';
import PropTypes from 'prop-types';
import './MarkdownInput.scss';

export default function MarkdownPreview({ updateTextForMarkdown, inputText }) {
  return (
    <div>
      <textarea
        className="inputValue"
        type="textarea"
        value={inputText}
        onChange={updateTextForMarkdown}
      />
    </div>
  );
}

MarkdownPreview.propTypes = {
  updateTextForMarkdown: PropTypes.func,
  inputText: PropTypes.string,
};

MarkdownPreview.defaultProps = {
  updateTextForMarkdown: () => {},
  inputText: '',
};
