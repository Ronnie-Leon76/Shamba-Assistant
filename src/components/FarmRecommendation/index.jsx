import ReactQuill from 'react-quill';
import React from 'react';
export default function WYSIWYG() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Example placeholder..."
      />
    </>
  );
}
