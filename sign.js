const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector("#passwordToggle");
const passwordIcon = passwordToggle.querySelector("i");

passwordToggle.addEventListener("click", () => {
    const passwordIsHidden = passwordInput.type === "password";

    passwordInput.type = passwordIsHidden ? "text" : "password";

    passwordIcon.classList.toggle("bi-eye", !passwordIsHidden);
    passwordIcon.classList.toggle("bi-eye-slash", passwordIsHidden);

    passwordToggle.setAttribute(
        "aria-label",
        passwordIsHidden ? "Hide password" : "Show password"
    );
});