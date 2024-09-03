function openRegistrationForm() {
    document.getElementById("registration-form").style.display = "block";
}

function closeRegistrationForm() {
    document.getElementById("registration-form").style.display = "none";
}

document.getElementById("regForm").onsubmit = function(event) {
    event.preventDefault();
    alert("شكرا لك، تم إرسال نموذج التسجيل.");
    closeRegistrationForm();
}

function confirmSubmission() {
    alert("شكرا لك، انتظر موافقة الأدمن.");
}

function requestEdit(button) {
    const newsItem = button.parentElement;
    const title = newsItem.querySelector("h2").innerText;
    const content = newsItem.querySelector("p").innerText;

    document.getElementById("edit-title").value = title;
    document.getElementById("edit-content").innerText = content;
    document.getElementById("edit-form").style.display = "block";

    // Save reference to the item being edited
    document.getElementById("editBlogForm").onsubmit = function(event) {
        event.preventDefault();
        const password = document.getElementById("edit-password").value;
        if (password === "56789") {
            newsItem.querySelector("h2").innerText = document.getElementById("edit-title").value;
            newsItem.querySelector("p").innerText = document.getElementById("edit-content").value;
            alert("تم تحديث الخبر بنجاح.");
            closeEditForm();
        } else {
            alert("الرمز السري غير صحيح.");
        }
    };
}

function closeEditForm() {
    document.getElementById("edit-form").style.display = "none";
}

function requestEditBlog(button) {
    const blogItem = button.parentElement;
    const title = blogItem.querySelector("h3").innerText;
    const content = blogItem.querySelector(".content").innerText;

    document.getElementById("edit-title").value = title;
    document.getElementById("edit-content").innerText = content;
    document.getElementById("edit-form").style.display = "block";

    // Save reference to the item being edited
    document.getElementById("editBlogForm").onsubmit = function(event) {
        event.preventDefault();
        const password = document.getElementById("edit-password").value;
        if (password === "56789") {
            blogItem.querySelector("h3").innerText = document.getElementById("edit-title").value;
            blogItem.querySelector(".content").innerText = document.getElementById("edit-content").value;
            alert("تم تحديث المقالة بنجاح.");
            closeEditForm();
        } else {
            alert("الرمز السري غير صحيح.");
        }
    };
}

function openNewsForm() {
    document.getElementById("news-form").style.display = "block";
}

function closeNewsForm() {
    document.getElementById("news-form").style.display = "none";
}

function openBlogForm() {
    document.getElementById("blog-form").style.display = "block";
}

function closeBlogForm() {
    document.getElementById("blog-form").style.display = "none";
}

document.getElementById("addNewsForm").onsubmit = function(event) {
    event.preventDefault();
    alert("تم إضافة الخبر بنجاح.");
    closeNewsForm();
}

document.getElementById("addBlogForm").onsubmit = function(event) {
    event.preventDefault();
    alert("تم إضافة المقالة بنجاح.");
    closeBlogForm();
}