const sizeField = document.getElementById('fontsize');
const colorField = document.getElementById('fontcolor');
const saveBtn = document.getElementById('submit');

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let fontsize = sizeField.value;
  let fontcolor = colorField.value;

  document.cookie = `fontsize=${fontsize}; expires=${new Date(Date.now() + 864e5).toUTCString()}; path=/`;
  document.cookie = `fontcolor=${fontcolor}; expires=${new Date(Date.now() + 864e5).toUTCString()}; path=/`;

  document.body.style.fontSize = `${fontsize}px`;
  document.body.style.color = fontcolor;
});

window.onload = function() {
  let fontSizeCookie = document.cookie.split('; ').find(row => row.startsWith('fontsize')).split('=')[1];
  let fontColorCookie = document.cookie.split('; ').find(row => row.startsWith('fontcolor')).split('=')[1];
  
  if(fontSizeCookie) {
    document.body.style.fontSize = `${fontSizeCookie}px`;
  }
  
  if(fontColorCookie) {
    document.body.style.color = fontColorCookie;
  }
};