
// REGISTRO
function registrar(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    if(!nome || !email || !senha){
    document.getElementById("cadMsg").innerText = "Preencha todos os campos!";
    return;
    }
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    let existe = usuarios.find(u => u.email === email);
    
    if(existe){
    document.getElementById("cadMsg").innerText = "Esse email já existe!";
    return;
    }
    
    usuarios.push({
    nome,
    email,
    senha
    });
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    document.getElementById("cadMsg").innerText = "Conta criada com sucesso!";
    
    }
    
    // LOGIN
    function login(){
    
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginPassword").value;
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    let user = usuarios.find(u => u.email === email && u.senha === senha);
    
    if(user){
    
    localStorage.setItem("logado", JSON.stringify(user));
    
    document.getElementById("loginMsg").innerText = "Login realizado!";
    
    setTimeout(()=>{
    window.location.href = "index.html";
    },1000);
    
    }else{
    document.getElementById("loginMsg").innerText = "Email ou senha inválidos!";
    }
    
    }