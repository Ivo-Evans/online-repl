const submitButton = document.querySelector('#submit')
const inputArea = document.querySelector('#code-area')
const outputArea = document.querySelector('#output-field')

console.log = (...arguments) => {
  arguments.forEach(argument => {
    const newLine = document.createElement('PRE')
    const codeElement = document.createElement('CODE')
    const textNode = document.createTextNode(argument)
    codeElement.appendChild(textNode);
    newLine.appendChild(codeElement);
    outputArea.appendChild(newLine);
    // somewhat unnecessarily elaborate, since console log always logs on a sinle line, no?
  })
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  try {
    eval(inputArea.value)
  } catch (error) {
    console.log(error)
  }
})
