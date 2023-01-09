
cosnt = myModal = new bootstrap.Modal("#register-Modal")
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
checkedLogged();
//LOGAR MO SISTEMA
document.getElementById("login-form").addEventListener("submit",  function(e){
    e.preventDefault();
    const email = document.getElementById("email-logar").value;
    const password = document.getElementById("password-logar").value;
    const checkSession = document.getElementById("session-chck").checked;

   // console.log(email,session);

   const account = getAccount(email);

   if(!account){
        alert("opss! Verifique o usuário ou a senha.")
        return;
   }
   if(account){
     if(account.password !== password){
        alert("opss! Verifique o usuário ou a senha.")
        return;
     }

       saveSession(email, checkSession);
     window.location.href = "home.html";
   }
   


});


//CRIAR CONTA 
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;
    console.log(email,password);

    if(email.length < 5){
        alert("Preencha  o campo com um e-mail valido");
    }

    if(password.length < 4){
        alert("Prencha o a senha com no minimo 4 digitos");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []

    });

    myModal.hide();

    alert("Sua Conta foi criada com sucesso!");
});


function checkedLogged(){
  if(session){
    sessionStorage.setItem("logged",session);
    logged = session;
  }

  if(logged){
        saveSession(logged,session);

        window.location.href = "home.html";
  }
}

 function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));

 }

function saveSession(data, saveSesion){
    if(saveSesion){
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

 function getAccount(key){
    const account = localStorage.getItem(key);
    if(account){
        return JSON.parse(account);
    }
    return "";
 }
