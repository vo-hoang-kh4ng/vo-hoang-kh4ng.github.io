---
layout: page
title: Hướng dẫn Setup Firebase Authentication
permalink: /firebase-setup/
---

# Hướng dẫn Setup Firebase Authentication cho Blog AI

## Tổng quan

Firebase Authentication cho phép người dùng đăng nhập vào blog bằng Google hoặc email/password một cách an toàn và dễ dàng.

## Bước 1: Tạo Firebase Project

### 1.1 Truy cập Firebase Console
1. Vào [Firebase Console](https://console.firebase.google.com/)
2. Đăng nhập bằng tài khoản Google
3. Click **"Add Project"** hoặc **"Tạo dự án"**

### 1.2 Cấu hình Project
- **Tên project**: o-hoang-kh4ng-blog (hoặc tên bạn muốn)
- **Chọn location**: sia-southeast1 (Singapore)
- **Google Analytics**: Có thể bật hoặc tắt
- Click **"Create project"**

## Bước 2: Thêm Web App

### 2.1 Đăng ký Web App
1. Trong Firebase Console, click biểu tượng **Web** (</>)
2. **App nickname**: o-hoang-kh4ng-blog-web
3. **Firebase Hosting**: Có thể bật nếu muốn
4. Click **"Register app"**

### 2.2 Lưu Firebase Config
Sau khi tạo app, Firebase sẽ hiển thị config code. **Lưu lại** thông tin này:

`javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
`

## Bước 3: Cấu hình Authentication

### 3.1 Bật Google Sign-in
1. Vào **Authentication** > **Sign-in method**
2. Click **Google** provider
3. **Enable** Google sign-in
4. **Project support email**: Nhập email của bạn
5. Click **Save**

### 3.2 Cấu hình Authorized Domains
1. Vào **Authentication** > **Settings** > **Authorized domains**
2. Thêm các domain sau:
   - o-hoang-kh4ng.github.io
   - localhost (để test local)

## Bước 4: Cập nhật Firebase Config

### 4.1 Mở file ssets/firebase-auth.js
Tìm dòng:
`javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // ...
};
`

### 4.2 Thay thế bằng config thực
Thay thế các giá trị YOUR_API_KEY, YOUR_PROJECT_ID, etc. bằng giá trị từ Firebase Console.

## Bước 5: Test Authentication

### 5.1 Test Local
1. Chạy undle exec jekyll serve
2. Vào http://localhost:4000/login/
3. Thử đăng nhập bằng Google

### 5.2 Test Production
1. Commit và push code lên GitHub
2. Vào https://vo-hoang-kh4ng.github.io/login/
3. Thử đăng nhập bằng Google

## Bước 6: Troubleshooting

### Lỗi thường gặp:

#### 1. "Firebase SDK chưa được load"
- Kiểm tra script tags trong login.markdown
- Đảm bảo Firebase scripts được load trước irebase-auth.js

#### 2. "This domain is not authorized"
- Kiểm tra Authorized domains trong Firebase Console
- Thêm domain o-hoang-kh4ng.github.io

#### 3. "Invalid API key"
- Kiểm tra lại API key trong irebase-auth.js
- Đảm bảo copy đúng từ Firebase Console

#### 4. "Google sign-in không hoạt động"
- Kiểm tra Google provider đã được enable
- Kiểm tra OAuth consent screen trong Google Cloud Console

## Bước 7: Cấu hình OAuth Consent Screen (Nếu cần)

### 7.1 Truy cập Google Cloud Console
1. Vào [Google Cloud Console](https://console.cloud.google.com/)
2. Chọn project Firebase của bạn
3. Vào **APIs & Services** > **OAuth consent screen**

### 7.2 Cấu hình OAuth
1. **User Type**: External
2. **App name**: Vo Hoang Khang AI Blog
3. **User support email**: Email của bạn
4. **Developer contact**: Email của bạn
5. **Scopes**: Thêm email và profile

## Bước 8: Deploy và Test

### 8.1 Commit và Push
`ash
git add .
git commit -m "Setup Firebase Authentication"
git push origin main
`

### 8.2 Kiểm tra Production
1. Đợi GitHub Pages build (2-3 phút)
2. Vào https://vo-hoang-kh4ng.github.io/login/
3. Test đăng nhập bằng Google

## Tính năng có sẵn

Sau khi setup xong, blog sẽ có:

###  Đăng nhập bằng Google
- Một click đăng nhập
- Tự động lấy thông tin profile
- Avatar và tên hiển thị

###  Đăng nhập bằng Email/Password
- Tạo tài khoản mới
- Đăng nhập với email/password
- Validation form

###  Quản lý Session
- Tự động đăng nhập khi quay lại
- Đăng xuất an toàn
- State management

###  UI/UX hiện đại
- Responsive design
- Loading states
- Error handling
- Smooth animations

## Hỗ trợ

Nếu gặp vấn đề, hãy:

1. Kiểm tra Console trong Developer Tools
2. Xem lại các bước setup
3. Tham khảo [Firebase Documentation](https://firebase.google.com/docs/auth/web/start)
4. Liên hệ qua GitHub Issues

---

**Lưu ý**: Đây là hướng dẫn cơ bản. Trong production, bạn nên:
- Sử dụng environment variables cho config
- Implement proper error handling
- Add security rules
- Monitor authentication events
