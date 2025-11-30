// lấy url của trang
let currentUrl = window.location.href;
// tạo url mới và lấy index
let url = new URL(currentUrl);
let index = url.searchParams.get("id");
// lấy thẻ div show sản phẩm
const relatedPro = document.getElementById("show-related-pro");

// ========================= laptop detail pages =========================
const lapPageData = products.filter((e) => e.category === "laptop");
let laptopObj = lapPageData.find((e) => e.id == index);

if (laptopObj) {
    document.getElementById("mainImage").src = `assets/img/laptops/${laptopObj.pic}.webp`;
    document.getElementById("thumbImage1").src = `assets/img/laptops/${laptopObj.pic}.webp`;
    document.getElementById("thumbImage2").src = `assets/img/laptops/${laptopObj.pic}.webp`;
    document.getElementById("thumbImage3").src = `assets/img/laptops/${laptopObj.pic}.webp`;
    document.getElementById("thumbImage4").src = `assets/img/laptops/${laptopObj.pic}.webp`;
    document.getElementById("proName").innerText = `${laptopObj.name}`;
    document.getElementById("proCate").innerText = `${laptopObj.category}`;
    document.getElementById("proPrice").innerText = `${laptopObj.price.toLocaleString("vi-VN")}₫`;

    lapPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 9}">
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= phone detail pages =========================
const phonePageData = products.filter((e) => e.category === "phone");
let phoneObj = phonePageData.find((e) => e.id == index);

if (phoneObj) {
    document.getElementById("mainImage").src = `assets/img/phones/${phoneObj.pic}.jpg`;
    document.getElementById("thumbImage1").src = `assets/img/phones/${phoneObj.pic}.jpg`;
    document.getElementById("thumbImage2").src = `assets/img/phones/${phoneObj.pic}.jpg`;
    document.getElementById("thumbImage3").src = `assets/img/phones/${phoneObj.pic}.jpg`;
    document.getElementById("thumbImage4").src = `assets/img/phones/${phoneObj.pic}.jpg`;
    document.getElementById("proName").innerText = `${phoneObj.name}`;
    document.getElementById("proCate").innerText = `${phoneObj.category}`;
    document.getElementById("proPrice").innerText = `${phoneObj.price.toLocaleString("vi-VN")}₫`;

    phonePageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 1}">
                    <div class="d-flex justify-content-center">
                        <img
                            src="assets/img/phones/${e.pic}.jpg"
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= accessory detail pages =========================
const accessoryPageData = products.filter((e) => e.category === "accessory");
let accessoryObj = accessoryPageData.find((e) => e.id == index);

if (accessoryObj) {
    document.getElementById("mainImage").src = `assets/img/accessories/${accessoryObj.pic}.webp`;
    document.getElementById("thumbImage1").src = `assets/img/accessories/${accessoryObj.pic}.webp`;
    document.getElementById("thumbImage2").src = `assets/img/accessories/${accessoryObj.pic}.webp`;
    document.getElementById("thumbImage3").src = `assets/img/accessories/${accessoryObj.pic}.webp`;
    document.getElementById("thumbImage4").src = `assets/img/accessories/${accessoryObj.pic}.webp`;
    document.getElementById("proName").innerText = `${accessoryObj.name}`;
    document.getElementById("proCate").innerText = `${accessoryObj.category}`;
    document.getElementById("proPrice").innerText = `${accessoryObj.price.toLocaleString("vi-VN")}₫`;

    accessoryPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 41}">
                    <div class="d-flex justify-content-center">
                        <img
                            src="assets/img/accessories/${e.pic}.webp"
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= smartwatch detail pages =========================
const smartwatchPageData = products.filter((e) => e.category === "smartwatch");
let smartwatchObj = smartwatchPageData.find((e) => e.id == index);

if (smartwatchObj) {
    document.getElementById("mainImage").src = `assets/img/smartwatchs/${smartwatchObj.pic}.jpg`;
    document.getElementById("thumbImage1").src = `assets/img/smartwatchs/${smartwatchObj.pic}.jpg`;
    document.getElementById("thumbImage2").src = `assets/img/smartwatchs/${smartwatchObj.pic}.jpg`;
    document.getElementById("thumbImage3").src = `assets/img/smartwatchs/${smartwatchObj.pic}.jpg`;
    document.getElementById("thumbImage4").src = `assets/img/smartwatchs/${smartwatchObj.pic}.jpg`;
    document.getElementById("proName").innerText = `${smartwatchObj.name}`;
    document.getElementById("proCate").innerText = `${smartwatchObj.category}`;
    document.getElementById("proPrice").innerText = `${smartwatchObj.price.toLocaleString("vi-VN")}₫`;

    smartwatchPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 17}">
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= watch detail pages =========================
const watchPageData = products.filter((e) => e.category === "watch");
let watchObj = watchPageData.find((e) => e.id == index);

if (watchObj) {
    document.getElementById("mainImage").src = `assets/img/watchs/${watchObj.pic}.jpg`;
    document.getElementById("thumbImage1").src = `assets/img/watchs/${watchObj.pic}.jpg`;
    document.getElementById("thumbImage2").src = `assets/img/watchs/${watchObj.pic}.jpg`;
    document.getElementById("thumbImage3").src = `assets/img/watchs/${watchObj.pic}.jpg`;
    document.getElementById("thumbImage4").src = `assets/img/watchs/${watchObj.pic}.jpg`;
    document.getElementById("proName").innerText = `${watchObj.name}`;
    document.getElementById("proCate").innerText = `${watchObj.category}`;
    document.getElementById("proPrice").innerText = `${watchObj.price.toLocaleString("vi-VN")}₫`;

    watchPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 33}">
                    <div class="d-flex justify-content-center">
                        <img
                            src="assets/img/watchs/${e.pic}.jpg"
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= tablet detail pages =========================
const tabletPageData = products.filter((e) => e.category === "tablet");
let tabletObj = tabletPageData.find((e) => e.id == index);

if (tabletObj) {
    document.getElementById("mainImage").src = `assets/img/tablets/${tabletObj.pic}.webp`;
    document.getElementById("thumbImage1").src = `assets/img/tablets/${tabletObj.pic}.webp`;
    document.getElementById("thumbImage2").src = `assets/img/tablets/${tabletObj.pic}.webp`;
    document.getElementById("thumbImage3").src = `assets/img/tablets/${tabletObj.pic}.webp`;
    document.getElementById("thumbImage4").src = `assets/img/tablets/${tabletObj.pic}.webp`;
    document.getElementById("proName").innerText = `${tabletObj.name}`;
    document.getElementById("proCate").innerText = `${tabletObj.category}`;
    document.getElementById("proPrice").innerText = `${tabletObj.price.toLocaleString("vi-VN")}₫`;

    tabletPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 49}">
                    <div class="d-flex justify-content-center">
                        <img
                            src="assets/img/tablets/${e.pic}.webp"
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= monitor detail pages =========================
const monitorPageData = products.filter((e) => e.category === "monitor");
let monitorObj = monitorPageData.find((e) => e.id == index);

if (monitorObj) {
    document.getElementById("mainImage").src = `assets/img/monitors/${monitorObj.pic}.webp`;
    document.getElementById("thumbImage1").src = `assets/img/monitors/${monitorObj.pic}.webp`;
    document.getElementById("thumbImage2").src = `assets/img/monitors/${monitorObj.pic}.webp`;
    document.getElementById("thumbImage3").src = `assets/img/monitors/${monitorObj.pic}.webp`;
    document.getElementById("thumbImage4").src = `assets/img/monitors/${monitorObj.pic}.webp`;
    document.getElementById("proName").innerText = `${monitorObj.name}`;
    document.getElementById("proCate").innerText = `${monitorObj.category}`;
    document.getElementById("proPrice").innerText = `${monitorObj.price.toLocaleString("vi-VN")}₫`;

    monitorPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 25}">
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}

// ========================= sim detail pages =========================
const simPageData = products.filter((e) => e.category === "sim");
let simObj = simPageData.find((e) => e.id == index);

if (simObj) {
    document.getElementById("mainImage").src = `assets/img/sims/${simObj.pic}.webp`;
    document.getElementById("thumbImage1").src = `assets/img/sims/${simObj.pic}.webp`;
    document.getElementById("thumbImage2").src = `assets/img/sims/${simObj.pic}.webp`;
    document.getElementById("thumbImage3").src = `assets/img/sims/${simObj.pic}.webp`;
    document.getElementById("thumbImage4").src = `assets/img/sims/${simObj.pic}.webp`;
    document.getElementById("proName").innerText = `${simObj.name}`;
    document.getElementById("proCate").innerText = `${simObj.category}`;
    document.getElementById("proPrice").innerText = `${simObj.price.toLocaleString("vi-VN")}₫`;

    simPageData.slice(0, 4).forEach((e, index) => {
        relatedPro.innerHTML += `
        <div class="col-md-6 col-lg-3 item my-3">
            <div class="card pt-3 bg-white">
                <a class="link-item link-prod" data-id="${index + 57}">
                    <div class="d-flex justify-content-center">
                        <img
                            src="assets/img/sims/${e.pic}.webp"
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
                        <button class="btn btn-outline-primary w-100 border-2">Thêm giỏ hàng</button>
                    </div>
                </a>
            </div>
        </div>
        `;
    });
}
