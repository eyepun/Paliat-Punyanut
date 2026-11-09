// แสดงข้อความต้อนรับ
window.addEventListener("load", function() {
    alert("ยินดีต้อนรับเข้าสู่เว็บไซต์ My Portfolio 💜");
});


// แอนิเมชันเมื่อเลื่อนหน้าจอ
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function() {
    cards.forEach(function(card) {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.classList.add("show");
        }
    });
});


// ปุ่มกลับขึ้นด้านบน
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "backToTop";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "25px";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// แสดงวันที่ปัจจุบัน
const today = new Date();

console.log("Welcome to My Portfolio!");
console.log("วันที่:", today.toLocaleDateString("th-TH"));
