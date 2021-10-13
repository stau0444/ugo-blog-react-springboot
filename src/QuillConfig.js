import hljs from "highlight.js"

export const modules = {
    'history': {          // Enable with custom configurations
    'delay': 2500,
    'userOnly': true
    },
    toolbar: [
        [{'font':[]}],
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        ['link', 'image'],
        ['code-block'],
        [{ 'color': [] }],
        [{ 'background': []}],  
        [{ 'align': [] }],
    ],
    syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
    },
  }
export const formats = [
    'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'link', 'image','color','background','align',
    'code-block',
]