function displayDateTime() {
    const dateTime = new Date();
    document.getElementById('datetime').innerHTML = `Current Date and Time: ${dateTime}`;
  }