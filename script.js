function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        number: document.getElementById("number").value ,
        subject: document.getElementById("subject").value ,
        message: document.getElementById("message").value,
        };

const serviceId = "service_q90820y";
const templateId = "template_aqvoird";

emailjs
.send(serviceId, templateId, params)
.then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("you message has been sent successfuly"); 
        }
)
.catch((err) => console.log(err));
}