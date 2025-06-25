const btn = document.getElementById("send-participation");

btn.addEventListener("click", function () {
    const checkbox = document.getElementById("register-data-form");
    if (checkbox.checked){
        alert("Les participations ne sont pas encore ouvertes.");
    }
    else{
        alert("Merci d'accepter le partage des données avant d'envoyer la participation");
    }
});