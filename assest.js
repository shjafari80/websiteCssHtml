// همه اسکریپت‌ها بعد از لود شدن DOM
// ===== اسکرول به بالا =====
const backToTop = document.getElementById('backToTop');
if (backToTop){
backToTop.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });
}


// ===== اسکرول به بخش ویژگی‌ها از هوم =====
const toFeatures = document.getElementById('toFeatures');
if (toFeatures){
toFeatures.addEventListener('click', (e) => {
// اجازه بده href کار کند اگر هشتگ است
});
}


// ===== نمایش/مخفی کردن رمز =====
document.querySelectorAll('[data-toggle="password"]').forEach(btn => {
btn.addEventListener('click', () => {
const input = btn.parentElement.querySelector('input');
input.type = input.type === 'password' ? 'text' : 'password';
});
});


// ===== فرم تماس نمایشی =====
const contactForm = document.getElementById('contactForm');
if (contactForm){
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
alert('پیام شما با موفقیت ارسال شد (نمایشی)');
contactForm.reset();
});
}


// ===== ورود نمایشی =====
const loginForm = document.getElementById('loginForm');
if (loginForm){
loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const email = loginForm.email.value.trim();
const pass = loginForm.password.value;
if (!email || pass.length < 6){
alert('ایمیل یا رمز عبور نامعتبر است');
return;
}
// شبیه‌سازی موفقیت و انتقال به داشبورد
window.location.href = '/dashboard/';
});
}


// ===== ثبت‌نام نمایشی =====
const registerForm = document.getElementById('registerForm');
if (registerForm){
registerForm.addEventListener('submit', (e) => {
e.preventDefault();
const pass = registerForm.password.value;
const conf = registerForm.confirm.value;
if (pass !== conf){
alert('رمز عبور و تکرار آن یکسان نیست');
return;
}
alert('ثبت‌نام با موفقیت انجام شد (نمایشی). اکنون وارد شوید.');
window.location.href = '/account/login.html';
});
}


// ===== خروج نمایشی =====
const logoutLink = document.getElementById('logoutLink');
if (logoutLink){
logoutLink.addEventListener('click', (e) => {
// هیچ کاری برای حذف نشست نداریم؛ صرفاً برگرد به صفحه ورود
});
}
});