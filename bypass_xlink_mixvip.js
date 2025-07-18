(function () {
  'use strict';
  function nhapma(ma) {
    const input = document.querySelector("input[name='code']");
    if (input) {
      input.value = ma;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
  
  window.addEventListener("load", () => {
  const btt = document.querySelector("#submit-button");
  const btt2 = document.querySelector("button#submit");
  const btl = document.querySelector("#changeCampaignButton");
  const btxn = document.querySelector("button.submit-button");
    if (location.href.includes("/api-mode/")) {
      const waitAndClick = setInterval(() => {
        if (btt) {
          btt.click();
          clearInterval(waitAndClick);
        }
      }, 300);
    }
    const loi = document.body.textContent.includes("Mã xác nhận sai rồi");
    if (loi) {
      if (btl) btl.click();
      location.reload();
    }
    let daTimThay = false;
  
    const danhSachMa = {
      "kenperfume.png": "0824422828",
      "trannhaxinh-1.png": "0315476699",
      "Noi-dung-5.jpg": "975769123",
      "Noi-dung-6.jpg": "975769123",
      "diamond-centery.png": "975769123",
      "home-permate.png": "0317341295",
      "Screenshot-2025-06-06-at-14.30.14.jpg": "Storytelling",
      "Screenshot-2025-07-07-at-21-20-08.png": "ReferralPermate",
      "Screenshot-2025-07-07-at-21-11-19.png": "AffiliatePlatform",
      "dongtrung.png": "367306846",
      "hutbephotbaominh.png": "46616888",
      "mst-webhd.jpg": "0315552572",
      "idbaiviet1.jpg": "15984e6479@",
      "image-46.png": "110617518",
      "Anh-man-hinh-2025-06-18-luc-5.29.45 CH.png": "11031103",
      "vntravelcar.png": "901150150",
      "phumy.jpg": "0963588919",
      "1752048345_279_maivang-qtdt.png": "19541968",
      "Thiet-ke-chua-co-ten-1.jpg": "8675228625",
      "ruoutaychinhhang.png": "AnnabelMeikle",
      "remdangkhoa-phongtho.png": "aB3dE9jK2p",
      "naphoga-thanhan.png": "0946402868",
      "dayluoithep-luoi-thep.png": "301155522",
      "vinaproxy.png": "THANKYOU",
    };
  
    for (const [tenAnh, ma] of Object.entries(danhSachMa)) {
      if (document.querySelector(`img[src*='${tenAnh}']`)) {
        nhapma(ma);
        if (btxn) btxn.click();
        daTimThay = true;
        break;
      }
    }
  
    const waitingText = document.querySelector("h3");
    if (waitingText && waitingText.textContent.includes("Vui Lòng Chờ Để Tiếp Tục")) {
      const interval = setInterval(() => {
        if (btt) btt.click();
        if (btt2) btt2.click();
      }, 1000);
    return;
    }
    if (waitingText && waitingText.textContent.includes("Bước cuối cùng rồi")) {
      const interval = setInterval(() => {
        if (btt) btt.click();
      }, 1000);
    return;
    }
  
    // ✅ Chỉ đổi chiến dịch nếu không khớp ảnh nào
    if (!daTimThay) {
      if (btl) btl.click();
      location.reload();
    }
  });
})();       