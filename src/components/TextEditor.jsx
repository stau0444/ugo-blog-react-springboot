import hljs from "highlight.js";
import 'highlight.js/styles/base16/google-dark.css';
import React, { useState } from "react";
import ReactQuill from 'react-quill';
import CodeBlock from './CodeBlock';

hljs.configure({   // optionally configure hljs
    languages: ['javascript', 'ruby', 'python']
});
const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},],
        ['link', 'image'],
        ['clean'],
        ['code-block']
    ],
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'code-block'
]


export default function TextEditor() {
  const [value, setValue] = useState('');

  return (
    <>
        <ReactQuill theme="snow"  modules={modules} formats={formats} value={value} onChange={setValue}/>
        <CodeBlock value={value}/>
    </>
  );
}

