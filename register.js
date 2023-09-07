document.querySelector("form").addEventListener("submit", function(event) {
    const full_name = document.getElementById("full_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const fingerprint_data = document.getElementById("fingerprint_data").value.trim();

    if (!full_name || !email || !phone || !password || !fingerprint_data) {
       alert("Please enter a name and email");
       event.preventDefault();
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email");
        event.preventDefault();
    }
});