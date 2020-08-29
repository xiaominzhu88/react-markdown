import React from 'react';
import PropTypes from 'prop-types';

export default function MarkdownPreview({
  inputHtmlText,
  updateHtmlForMarkdown,
}) {
  return (
    <div>
      <textarea
        className="inputValue"
        type="textarea"
        value={inputHtmlText}
        onChange={updateHtmlForMarkdown}
      />
    </div>
  );
}

MarkdownPreview.propTypes = {
  updateHtmlForMarkdown: PropTypes.func,
  inputHtmlText: PropTypes.string,
};

MarkdownPreview.defaultProps = {
  updateHtmlForMarkdown: () => {},
  inputHtmlText: '',
};
