fetch('http://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// OR

fetch('http://example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({key: 'value'})
});
