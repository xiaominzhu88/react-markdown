/** @jsx jsx */
import { jsx, css } from '@emotion/core';
//import React from 'react';

export default function Markdown(props) {
  const fieldStyle = css`
    display: flex;
    flex-direction: column;
  `;
  const inputStyle = css`
    width: 400px;
    height: 50vh;
    margin: 0 auto;
    @media (max-width: 600px) {
      width: 200px;
      height: 30vh;
    }
  `;
  const h3Style = css`
    text-align: center;
    font-family: monospace;
    background-color: #ba1fbf;
    width: 40%;
    color: #fff;
    margin: 2em auto;
    height: 2em;
    border-radius: 5px;

    @media (max-width: 600px) {
      font-size: 0.8em;
      height: 3.5em;
      padding-top: 0.6em;
    }
  `;
  const outputStyle = css`
    text-align: center;
    font-family: monospace;
    background-color: #fff;
    width: 400px;
    height: auto;
    margin: 0 auto;
    padding: 2em;
    text-align: left;

    width: 200px;
    height: auto;
    @media (max-width: 600px) {
      width: 175px;
    }
  `;
  return (
    <div className="markdown-field" css={fieldStyle}>
      <textarea
        className="input"
        css={inputStyle}
        onChange={props.updateMarkdown}
        value={props.value}
      ></textarea>
      <h3 className="output" css={h3Style}>
        Markdown Preview
      </h3>
      <div
        className="output"
        css={outputStyle}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      ></div>
    </div>
  );
}
