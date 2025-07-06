nm = document.querySelector(".name");
em = document.querySelector(".username");
pw = document.querySelector(".pass");

function signup() {
    let email = em.value;
    let password = pw.value;
    let name = nm.value;
    if (email === "" || password === "" || name === "") {
        alert("Please Enter all the fields");
    }
    
    else{
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        
        const rightSection = document.querySelector(".rightsection");
        if (rightSection) {
            rightSection.textContent = "Signup successful! Redirecting...";
            rightSection.classList.add("success");
        }
        window.location.href = "./confirmation.html";

    }

}