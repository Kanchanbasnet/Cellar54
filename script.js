const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});

ScrollReveal({
  reset:true,
  distance:'60px',
  duration:2500,
  delay:400

});

ScrollReveal().reveal('.about .about-img ' , { delay:50, origin:'left' });

ScrollReveal().reveal('.about .about-text  ',{delay:50, origin:'right'});








  function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return false;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      alert("Please enter a valid name with letters and spaces only.");
      nameInput.focus();
      return false;
    }

    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      alert("Please enter a valid phone number.");
      phoneInput.focus();
      return false;
    }

    // Form is valid, display success message and submit form
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    return true;
  }


  const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


    

 