// ============================= count down time flashSale =============================
function countDown() {
    let totalSeconds = 3600;
    const display = document.getElementById("countDown");

    const countDownInterval = setInterval(() => {
        // tính giờ lấy phần nguyên, 3600 là số s trong 1h
        const hours = Math.floor(totalSeconds / 3600);
        // tính phút: lấy số giây còn lại sau khi trừ và chia 60 để lấy phút
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        // tính giây còn lại sau khi trừ phút và giờ
        const seconds = Math.floor(totalSeconds % 60);

        // định dạng hiển thị
        const displayTime = String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
        // hiển thị ra màn hình
        display.textContent = displayTime;
        // đếm ngược đi 1 giây
        totalSeconds--;

        //dừng khi hết giờ
        if (totalSeconds < 0) {
            clearInterval(countDown);
            display.textContent = "Kết thúc thời gian";
        }
    }, 1000);
}

// đếm ngược khi load trang
window.onload = countDown;

// ============================= show flashSale =============================
const flashSales = products.filter((e) => e.category === "phone").slice(0, 4);
const flashSaleList = document.getElementById("showFlashSale");

for (let i = 0; i < flashSales.length; i++) {
    flashSaleList.innerHTML += `
    <div class="col-md-6 col-lg-3 item my-3">
        <div class="card pt-3 bg-white">
            <a class="link-item" data-id="${i}">
                <div class="d-flex justify-content-center">
                    <img
                        src="assets/img/phones/${flashSales[i].pic}.jpg"
                        class="card-img-top"
                        style="width: 200px"
                        alt="..."
                    />
                </div>
                <div class="card-body">
                    <p class="card-title fw-bold small line-clamp" style="height: 42px">
                        ${flashSales[i].name}
                    </p>
                    <p class="card-text mb-0 fs-5 fw-bold text-danger">${flashSales[i].price.toLocaleString("vi-VN")}₫</p>
                    <div class="text-decoration-line-through small text-secondary mb-3">
                        13.990.000₫
                    </div>
                    <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                </div>
            </a>
        </div>
    </div>
    `;
}

// ============================= show phones =============================
const phoneData = products.filter((e) => e.category === "phone").slice(0, 4);
const phones = document.getElementById("showPhone");

for (let i = 0; i < phoneData.length; i++) {
    phones.innerHTML += `
    <div class="col-md-6 col-lg-3 item my-3">
        <div class="card pt-3 bg-white">
            <a class="link-item link-prod" data-id="${i}">
                <div class="d-flex justify-content-center">
                    <img
                        src="assets/img/phones/${phoneData[i].pic}.jpg"
                        class="card-img-top"
                        style="width: 200px"
                        alt="..."
                    />
                </div>
                <div class="card-body">
                    <p class="card-title fw-bold small line-clamp" style="height: 42px">
                        ${phoneData[i].name}
                    </p>
                    <p class="card-text mb-0 fs-5 fw-bold text-danger"">${phoneData[i].price.toLocaleString("vi-VN")}₫</p>
                    <div class="text-decoration-line-through small text-secondary mb-3">
                        13.990.000₫
                    </div>
                    <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                </div>
            </a>
        </div>
    </div>
    `;
}

// ============================= show laptops =============================
const laptopData = products.filter((e) => e.category === "laptop").slice(0, 4);
const laptops = document.querySelector("#showLaptop");

laptopData.forEach((e, index) => {
    laptops.innerHTML += `
    <div class="col-md-6 col-lg-3 item my-3">
        <div class="card pt-3 bg-white">
            <a class="link-item  link-prod"  data-id="${index}">
                <div class="d-flex justify-content-center">
                    <img
                        src="assets/img/laptops/${e.pic}.webp"
                        class="card-img-top"
                        style="width: 200px"
                        alt="..."
                    />
                </div>
                <div class="card-body">
                    <p class="card-title fw-bold small line-clamp" style="height: 42px">
                        ${e.name}
                    </p>
                    <p class="card-text mb-0 fs-5 fw-bold text-danger">${e.price.toLocaleString("vi-VN")}₫</p>
                    <div class="text-decoration-line-through small text-secondary mb-3">
                        13.990.000₫
                    </div>
                    <button class="btn btn-outline-primary d-inline-block w-100 border-2">Thêm giỏ hàng</button>
                </div>
            </a>
        </div>
    </div>
    `;
});

// ============================= show smartwatchs =============================
const smartwatchData = products.filter((e) => e.category === "smartwatch").slice(0, 4);
const smartwatchs = document.getElementById("showSmartwatch");

smartwatchData.forEach((e, index) => {
    smartwatchs.innerHTML += `
    <div class="col-md-6 col-lg-3 item my-3">
        <div class="card pt-3 bg-white">
            <a class="link-item" data-id="${index}">
                <div class="d-flex justify-content-center">
                    <img
                        src="assets/img/smartwatchs/${e.pic}.jpg"
                        class="card-img-top"
                        style="width: 200px"
                        alt="..."
                    />
                </div>
                <div class="card-body">
                    <p class="card-title fw-bold small line-clamp" style="height: 42px">
                        ${e.name}
                    </p>
                    <p class="card-text mb-0 fs-5 fw-bold text-danger">${e.price.toLocaleString("vi-VN")}₫</p>
                    <div class="text-decoration-line-through small text-secondary mb-3">
                        13.990.000₫
                    </div>
                    <button class="btn btn-outline-primary d-inline-block w-100 border-2">Thêm giỏ hàng</button>
                </div>
            </a>
        </div>
    </div>
    `;
});

// ============================= show monitors =============================
const monitorData = products.filter((e) => e.category === "monitor").slice(0, 4);
const monitors = document.getElementById("showMonitor");

monitorData.forEach((e, index) => {
    monitors.innerHTML += `
    <div class="col-md-6 col-lg-3 item my-3">
        <div class="card pt-3 bg-white">
            <a class="link-item link-prod" data-id="${index}">
                <div class="d-flex justify-content-center">
                    <img
                        src="assets/img/monitors/${e.pic}.webp"
                        class="card-img-top"
                        style="width: 200px"
                        alt="..."
                    />
                </div>
                <div class="card-body">
                    <p class="card-title fw-bold small line-clamp" style="height: 42px">
                        ${e.name}
                    </p>
                    <p class="card-text mb-0 fs-5 fw-bold text-danger">${e.price.toLocaleString("vi-VN")}₫</p>
                    <div class="text-decoration-line-through small text-secondary mb-3">
                        13.990.000₫
                    </div>
                    <button class="btn btn-outline-primary d-inline-block w-100 border-2">Thêm giỏ hàng</button>
                </div>
            </a>
        </div>
    </div>
    `;
});
