---
layout: page
title: Login
permalink: /login/
---

# Đăng nhập vào Blog AI 

Chào mừng bạn quay trở lại! Đăng nhập để có thể tương tác với các bài viết.

## Đăng nhập nhanh

<div class="social-login">
  <button class="google-login" onclick="signInWithGoogle()">
    <i class="fab fa-google"></i> Đăng nhập với Google
  </button>
  
  <button class="github-login" onclick="signInWithGitHub()">
    <i class="fab fa-github"></i> Đăng nhập với GitHub
  </button>
</div>

## Hoặc đăng nhập bằng email

<form class="login-form" id="emailLoginForm">
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="your.email@example.com">
  </div>
  
  <div class="form-group">
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required placeholder="Mật khẩu của bạn">
  </div>
  
  <div class="form-group">
    <label>
      <input type="checkbox" name="remember"> Ghi nhớ đăng nhập
    </label>
  </div>
  
  <button type="submit" class="login-btn">Đăng nhập </button>
</form>

## Chưa có tài khoản?

<a href="/register/" class="register-link">Đăng ký tài khoản mới</a>

## Quên mật khẩu?

<a href="#" onclick="resetPassword()" class="forgot-link">Khôi phục mật khẩu</a>

## Tại sao nên đăng ký tài khoản?

-  **Like bài viết**: Thể hiện sự yêu thích với nội dung
-  **Bình luận**: Thảo luận và chia sẻ ý kiến
-  **Lưu bài viết**: Lưu những bài viết yêu thích
-  **Thông báo**: Nhận thông báo khi có bình luận mới
-  **Hồ sơ cá nhân**: Quản lý thông tin cá nhân

---

*Đăng nhập để có trải nghiệm tốt nhất trên blog AI!*

<!-- Firebase Auth -->
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"></script>

<!-- Include CSS -->
<link rel="stylesheet" href="/assets/custom.css">
<script src="/assets/firebase-auth.js"></script>
