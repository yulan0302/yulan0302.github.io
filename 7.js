// 表单验证
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('请填写所有字段。');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('请输入有效的电子邮件地址。');
        event.preventDefault();
    }
});
// 获取模态窗口和按钮元素
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const btn1 = document.getElementById("myBtn1");
const span = document.getElementsByClassName("close")[0];

// 打开模态窗口
btn.onclick = function() {
    modal.style.display = "block";
}

btn1.onclick = function() {
    modal.style.display = "block";
}

// 关闭模态窗口
span.onclick = function() {
    modal.style.display = "none";
}

// 点击模态窗口外部时关闭
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 通过按下 Esc 键关闭模态窗口
document.onkeydown = function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
}

// 添加过渡动画的类切换
function openModal() {
    modal.style.display = "block";
    setTimeout(function(){ 
        modal.classList.add("show");
    }, 1); // 防止某些浏览器在动画开始前就渲染元素
}

function closeModal() {
    modal.classList.remove("show");
    setTimeout(function(){ 
        modal.style.display = "none";
    }, 300); // 等待动画完成
}

// 验证电子邮件地址
function validateEmail(email) {  
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return re.test(String(email).toLowerCase());  
}  