---
layout: page
title: Login
permalink: /login/
---

# Đăng nhập vào Blog AI 

Chào mừng bạn quay trở lại! Đăng nhập để có thể tương tác với các bài viết.

## Đăng nhập nhanh

<div class="social-login">
  <button class="google-login" id="google-login" onclick="signInWithGoogle()">
    <i class="fab fa-google"></i> Đăng nhập với Google
  </button>
  
  <button class="github-login" id="github-login" onclick="signInWithGitHub()">
    <i class="fab fa-github"></i> Đăng nhập với GitHub
  </button>
</div>

<div style="text-align: center; margin: 1.5rem 0; color: var(--ai-gray-500); font-size: 0.875rem;">
   hoặc 
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

<a href="/register/" class="register-link" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--ai-gray-100); color: var(--ai-gray-700); text-decoration: none; border-radius: 8px; transition: all 0.3s ease;">Đăng ký tài khoản mới</a>

## Quên mật khẩu?

<a href="#" onclick="resetPassword()" class="forgot-link" style="display: inline-block; margin-top: 0.5rem; color: var(--ai-primary); text-decoration: none;">Khôi phục mật khẩu</a>

## Tại sao nên đăng ký tài khoản?

-  **Like bài viết**: Thể hiện sự yêu thích với nội dung
-  **Bình luận**: Thảo luận và chia sẻ ý kiến
-  **Lưu bài viết**: Lưu những bài viết yêu thích
-  **Thông báo**: Nhận thông báo khi có bình luận mới
-  **Hồ sơ cá nhân**: Quản lý thông tin cá nhân

---

*Đăng nhập để có trải nghiệm tốt nhất trên blog AI!*

<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"></script>

<!-- Include CSS and JS -->
<link rel="stylesheet" href="/assets/custom.css">
<script src="/assets/firebase-auth.js"></script>
