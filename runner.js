const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk1ZmIyNTJhLTUzNjgtNDI1ZS04NjJjLWUwM2VjNzUzYzJjYi0xNzI5NTU5NzI2NzQ1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOWFmYWEyYTAtODFhZS00YjNlLTljMGUtNDc5YWViNGFkNzFiIiwidHlwZSI6InQifQ.-M0kvyShHTsmLyBgal5gB2FcjYpJHOT6X6F1nMYZ7to'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})