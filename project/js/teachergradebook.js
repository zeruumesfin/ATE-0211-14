function validateForm() {
    var semester = document.getElementById("semester").value;
    var subject = document.getElementById("subject").value;
    if (semester === "" || subject === "") {
        alert("Please select a semester and subject.");
        return false;
    }
    return true;
}