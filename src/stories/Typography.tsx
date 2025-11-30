// this is the Name.jsx file
import React from 'react';

import "../styles/variables.css";
import "../styles/typography.css";

export const Typography = () => {
  return (
    <>
      Typography<br />
      <p>Body Font Family</p>
      <p className='storybook-code_font'>
        <code>
          code-font
        </code>
      </p>

      <h1>everest</h1>
      <h2>aconcagua</h2>
      <h3>denali</h3>
      <h4>kilimanjaro</h4>
      <h5>elbrus</h5>
      <h6>vinson</h6>
      <small>kosciuszko</small>
      <p>p</p>
      <p>this text includes a <span className='storybook-selection'>selection</span> on a span</p>
      <p className='sr-only'>screen reader text</p>
      {/* TODO: */}
      <blockquote>

      </blockquote>
    </>
  );
};