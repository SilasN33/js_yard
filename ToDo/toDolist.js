// Obtém os valores do localStorage, se eles existirem
var lista_email = JSON.parse(localStorage.getItem("lista_email")) || [];
var lista_senha = JSON.parse(localStorage.getItem("lista_senha")) || [];

function criaUsuario() {
    var input_email = document.getElementById("floatingInput").value;
    var input_senha = document.getElementById("floatingPassword").value;

    // Adiciona os valores à lista
    lista_email.push(input_email);
    lista_senha.push(input_senha);

    // Salva as listas no localStorage
    localStorage.setItem("lista_email", JSON.stringify(lista_email));
    localStorage.setItem("lista_senha", JSON.stringify(lista_senha));

    console.log("Email:", input_email);
    console.log("Senha:", input_senha);

    console.log("Lista de Emails:", lista_email);
    console.log("Lista de Senhas:", lista_senha);

    document.getElementById("floatingInput").value = "";
    document.getElementById("floatingPassword").value = "";
}