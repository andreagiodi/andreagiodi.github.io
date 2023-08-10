document.addEventListener("DOMContentLoaded", function() {
    const chatTextElements = document.querySelectorAll('.chat-text');

    chatTextElements.forEach(chatText => {
      const text = chatText.textContent;
      let i = 0;

      chatText.textContent = '';

      function typeText() {
        if (i < text.length) {
          chatText.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeText, 60);
        }
      }

      typeText();
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector('#profile-img');
    const chatTextElements = document.querySelectorAll('.chat-text1');
  
    chatTextElements.forEach(chatText => {
      chatText.style.display = "none";
    });
  
    setTimeout(function() {
      profileImage.src = "/static/MILK.jpeg";
      
      chatTextElements.forEach(chatText => {
        const text = chatText.textContent;
        let i = 0;
  
        chatText.style.display = "block"; 
        chatText.textContent = '';
  
        function typeText() {
          if (i < text.length) {
            chatText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText, 10);
          }
        }
  
        typeText();
      });
    }, 3350);
  });
  
  
