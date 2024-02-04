function revealEmail(email){
email.innerHTML="aishvarya1309@gmail.com";
}
function normalEmail(email){
    email.innerHTML="Email";
    }

function showLinkedin(){
    window.location.href= "linkedin.com/in/aishvarya-s-594171241";
}    
function downloadResume() {
    var link = document.createElement("a");
    link.href = "AISHVARYA S (4).pdf";
    link.download = "AISHVARYA S (4).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}