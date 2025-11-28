// login-by-phone
const loginByPhone = document.getElementById("login-by-phone");

loginByPhone.addEventListener("click", () => {
    alert("Đăng nhập thành công bằng số điện thoại!");
    window.location.href = "index.html";
});

// login-by-fb
const loginByFb = document.getElementById("login-by-fb");

loginByFb.addEventListener("click", () => {
    alert("Đăng nhập thành công bằng Facebook!");
    window.location.href = "index.html";
});

// login-by-gg
const loginByGg = document.getElementById("login-by-gg");

loginByGg.addEventListener("click", () => {
    alert("Đăng nhập thành công bằng email!");
    window.location.href = "index.html";
});
