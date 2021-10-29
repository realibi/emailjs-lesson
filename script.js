let emailInput = document.querySelector("#email_input");
let verificationCodeInput = document.querySelector("#verification_code_input");
let sendEmailButton = document.querySelector("#send_email_button");
let loginButton = document.querySelector("#login_button");

let randomCode = null;

sendEmailButton.addEventListener('click', () => {
    randomCode = Math.floor(Math.random() * 10000);

    var templateParams = {
        code: randomCode,
        to_email: emailInput.value
    };
     
    emailjs.send('service_zygd1yj', 'template_vu9me84', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
})

loginButton.addEventListener('click', () => {
    if(randomCode == verificationCodeInput.value){
        console.log("Вы успешно авторизовались!")
    }else{
        console.log("Неправильный код!");
    }
})
