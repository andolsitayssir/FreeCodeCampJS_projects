document.addEventListener('DOMContentLoaded', () => {
   

    const btn = document.getElementById('check-btn');
    const result = document.getElementById('result');
    const text = document.getElementById('text-input');

   

    btn.addEventListener("click", () => {
       
        const inputValue = text.value.trim();
      

        if (inputValue === "") {
            result.innerText = "Please enter a value";
            result.classList.add('visible');
            result.style.backgroundColor = "rgba(249, 135, 135, 0.1)";
            result.style.color = "red";
           
        } else if (inputValue.length === 1) {
            result.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
            
             result.classList.add('visible');
             result.style.backgroundColor = "";
             result.style.color = "";
            
        } else {
            const cleaned = inputValue.replace(/[\W_]/g, '').toLowerCase();
            const reversed = cleaned.split('').reverse().join('');
           

            if (cleaned === reversed) {
                result.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
            } else {
                result.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
            }
            result.classList.add('visible');
            result.style.backgroundColor = "";
            result.style.color = "";
        }
          text.value='';


        setTimeout(() => {
            result.classList.remove('visible');
        }, 2000);
    });
});
