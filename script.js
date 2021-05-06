function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Harap Masukan Nama Anda ";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Harap Masukan Subjek ";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length < 10){
      text = "Harap Masukan Nomor Telephone Min 10 Digit";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Harap Masukan Email Yang Valid";
        error_message.innerHTML = text;
    return false;
    }
    if(message.length <= 10){
      text = "Harap Masukan Lebih Dari 10 Karakter";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formulir Berhasil Dikirim!");
    return true;
}