function validation(){
    var name = document.getElementById("name").value;
    var text;

    errorprompt.style.padding = "15px";
    
    if(name.length < 2)
    {
        text = "Please Enter Full Name Above 2 Characters! e.g. (Ashwin Vigneswaran)";
        errorprompt.innerHTML = text;
        return false;
    }

    var email = document.getElementById("email").value;

    if(email.indexOf("@gmail.com") == -1 || email.length < 10)
    {
        text = "Please Enter Valid Email Address Above 10 Characters! e.g. (asshwin1312@gmail.com)";
        errorprompt.innerHTML = text;
        return false;
    }

    var phone = document.getElementById("phone").value;

    if(isNaN(phone) || phone.length != 10)
    {
        text = "Please Enter Valid Phone Number Of 10 Characters! e.g. (0176342369)";
        errorprompt.innerHTML = text;
        return false;
    }

    var subject = document.getElementById("subject").value;

    if(subject.length < 5)
    {
        text = "Please Enter A Proper Subject Above 5 Characters!";
        errorprompt.innerHTML = text;
        return false;
    }

    var message = document.getElementById("message").value;

    if(message.length< 100)
    {
        text = "Please Enter A Message Exceeding 100 Words!";
        errorprompt.innerHTML = text;
        return false;
    }

    alert("Your Form Has Been Submitted. Thank You!")
    return true;
}