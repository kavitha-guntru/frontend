function validateForm() {
    const nameField = document.getElementById('name');
    if (nameField.value.trim() === "") {
      alert('Text box cannot be empty');
      return false; // Prevent form submission
    }
    return true; // Allow form submission
  }