// Lấy phần tử nút
let scrollTopBtn = document.getElementById("scrollTopBtn");

// 1. Hiển thị/Ẩn nút khi cuộn
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // Nếu vị trí cuộn dọc scrollTop lớn hơn 500px thì hiển thị nút không thì ẩn
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.opacity = "1";
    } else {
        scrollTopBtn.style.opacity = "0";
    }
}

// 2. Chức năng cuộn lên đầu trang khi nhấp vào nút
scrollTopBtn.addEventListener("click", () => {
    // Cuộn mượt (smooth scroll)
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
