import '../js/cors/lib/index.js'

const scriptURL = 'https://script.google.com/macros/s/AKfycbxMKwy5X0nLhu4AZgJ1iwd8dNj-Jjbp7R20HPmFSdev1NWeds9jtDD2JM6z_F6df2yc/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})