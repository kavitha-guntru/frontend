function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Calculate expiration date
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  }

  function getCookie(name) {
    const nameEq = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
    }
    return null; // Return null if cookie not found
  }

  function checkCookie(name) {
    const cookie = getCookie(name);
    if (cookie !== null) {
      alert(`Cookie value: ${cookie}`);
    } else {
      alert('Cookie not found');
    }
  }