document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, my name is Giodice Andrea. Here is my portfolio!";
    const chatText = document.querySelector('.chat-text');
    let i = 0;
  
    function typeText() {
      if (i < text.length) {
        chatText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 60);
      }
    }
  
    typeText();
  });

