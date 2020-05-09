var socket = io("http://192.168.123.123:3000");

function sendMessage() {
    // Sending message
    socket.emit("messageSent", {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "subject": document.getElementById("subject").value,
        "message": document.getElementById("message").value
    });

    // Saving in local storage, for example.

}