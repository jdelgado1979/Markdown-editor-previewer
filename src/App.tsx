import React from 'react';
import { useState } from 'react';
import { Remarkable } from 'remarkable';
import MainEditor from './editor';
import { placeholder } from './markdown';

export default function App() {
  const [inputVal, setInputVal] = useState(placeholder);

  const md = new Remarkable();

  function renderMarkdownToHTML(markdown) {
    const renderedHTML = md.render(markdown);
    return { __html: renderedHTML };
  }

  function MarkdownPreview({ markdown }) {
    const markup = renderMarkdownToHTML(markdown);
    return <div dangerouslySetInnerHTML={markup} />;
  }

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <div id="mainpage">
      <MainEditor handleChange={handleChange} inputVal={inputVal} />
      <div id="preview">
        <MarkdownPreview markdown={inputVal} />
      </div>
    </div>
  );
}
