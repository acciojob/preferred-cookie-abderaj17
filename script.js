
 
 
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}
 
// Function to set a cookie with a specific name, value, and expiration days
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expire in 'days'
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
 
// Function to load saved preferences from cookies
function loadPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");
 
  // Apply the saved preferences if they exist
  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }
 
  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}
 
// Event listener for the form submit
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting
 
  // Get user input values
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;
 
  // Save preferences to cookies (expire in 365 days)
  setCookie("fontsize", fontSize, 365);
  setCookie("fontcolor", fontColor, 365);
 
  // Apply the preferences immediately
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
 
  alert("Preferences saved!");
});
 
// Load preferences when the page is loaded
window.onload = loadPreferences;