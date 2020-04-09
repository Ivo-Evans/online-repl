- Use codeMirror to create a code editor - there are some youtube tutorials, it should be easy
- for compile.js:
  - clear the output area
  - redefine console.log so that it adds children to the output field
    - console.log can be redefined like this
      console.log = n => n**2 // easy
  - eval() the contents of the textarea, or consider Function() - eval() will then use the redefined console.log.
  - add an event listener to the submit button which does the outputting.
  - output area should be an aria-live-region