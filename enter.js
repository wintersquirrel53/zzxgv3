fetch('/panel.php')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Or response.json() for JSON data
  })
  .then(data => {
    alert(data); // Display the response data in an alert
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    alert('Error fetching data: ' + error.message);
  });
