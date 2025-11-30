// ============================= show outstanding products =============================
const outProData = products.filter((e) => e.category === "monitor").slice(0, 4);
const outPro = document.getElementById("showOutPro");

outProData.forEach((e, index) => {
    outPro.innerHTML += `
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

// ============================= show laptop page =============================
const lapPageData = products.filter((e) => e.category === "monitor");
const laptopList = document.getElementById("showLapPage");

lapPageData.forEach((e, index) => {
    laptopList.innerHTML += `
    <div class="col-md-6 col-lg-3 item my-3 border-3">
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
