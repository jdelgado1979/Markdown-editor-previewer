import React from 'react';

export default function MainEditor({ inputVal, handleChange }) {
  return (
    <div>
      <textarea id="editor" value={inputVal} onChange={handleChange} />
    </div>
  );
}
