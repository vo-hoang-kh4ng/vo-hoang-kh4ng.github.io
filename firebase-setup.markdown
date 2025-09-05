---
layout: page
title: Firebase Setup Guide
permalink: /firebase-setup/
---

# Hướng dẫn Setup Firebase cho Blog AI 

Đây là hướng dẫn chi tiết để setup Firebase Authentication cho blog AI của bạn.

## Bước 1: Tạo Firebase Project

### 1.1 Truy cập Firebase Console
1. Đi đến [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project" hoặc "Add project"
3. Nhập tên project: i-blog-vo-hoang-kh4ng (hoặc tên bạn muốn)
4. Chọn "Enable Google Analytics" (tùy chọn)
5. Click "Create project"

### 1.2 Cấu hình Project
1. Chọn region: sia-southeast1 (Singapore) - gần Việt Nam nhất
2. Chọn Analytics account (nếu có)
3. Click "Create project"
4. Đợi project được tạo (1-2 phút)

## Bước 2: Setup Authentication

### 2.1 Enable Authentication
1. Trong Firebase Console, click "Authentication" ở sidebar
2. Click "Get started"
3. Chọn tab "Sign-in method"
4. Enable các phương thức đăng nhập:

#### Google Sign-in:
1. Click "Google" 
2. Toggle "Enable"
3. Chọn "Project support email" (email của bạn)
4. Click "Save"

#### GitHub Sign-in:
1. Click "GitHub"
2. Toggle "Enable"
3. Tạo GitHub OAuth App:
   - Đi đến [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Application name: AI Blog Auth
   - Homepage URL: https://vo-hoang-kh4ng.github.io
   - Authorization callback URL: https://ai-blog-vo-hoang-kh4ng.firebaseapp.com/__/auth/handler
   - Click "Register application"
   - Copy Client ID và Client Secret
4. Paste Client ID và Client Secret vào Firebase
5. Click "Save"

#### Email/Password:
1. Click "Email/Password"
2. Toggle "Enable" cho cả 2 options
3. Click "Save"

## Bước 3: Setup Firestore Database

### 3.1 Tạo Database
1. Click "Firestore Database" ở sidebar
2. Click "Create database"
3. Chọn "Start in test mode" (cho development)
4. Chọn location: sia-southeast1
5. Click "Done"

## Bước 4: Lấy Firebase Config

### 4.1 Project Settings
1. Click gear icon () > "Project settings"
2. Scroll xuống "Your apps" section
3. Click "Web app" icon (</>)
4. Nhập app nickname: AI Blog Web
5. Check "Also set up Firebase Hosting" (tùy chọn)
6. Click "Register app"

### 4.2 Copy Config
Sao chép config object và thay thế trong ssets/firebase-auth.js

## Bước 5: Cập nhật Code

### 5.1 Cập nhật Firebase Config
Mở file ssets/firebase-auth.js và thay thế config với thông tin thực tế từ Firebase Console.

### 5.2 Test Authentication
1. Mở trang /login/ trên blog
2. Thử đăng nhập với Google
3. Kiểm tra console để xem có lỗi không
4. Kiểm tra Firebase Console > Authentication > Users

## Bước 6: Cấu hình Domain (Production)

### 6.1 Authorized Domains
1. Trong Firebase Console > Authentication > Settings
2. Scroll xuống "Authorized domains"
3. Thêm domain: o-hoang-kh4ng.github.io
4. Click "Add domain"

## Bước 7: Deploy và Test

### 7.1 Commit Changes
`ash
git add .
git commit -m "Add Firebase Authentication"
git push origin main
`

### 7.2 Test Production
1. Đợi GitHub Pages deploy (2-3 phút)
2. Truy cập https://vo-hoang-kh4ng.github.io/login/
3. Test đăng nhập với Google/GitHub
4. Kiểm tra user data trong Firestore

## Troubleshooting

### Lỗi thường gặp:

#### 1. "Firebase chưa được khởi tạo"
- Kiểm tra Firebase SDK đã load chưa
- Kiểm tra config có đúng không
- Kiểm tra console có lỗi JavaScript không

#### 2. "Popup bị chặn"
- Cho phép popup cho domain
- Thử đăng nhập lại
- Kiểm tra ad blocker

#### 3. "Domain không được authorize"
- Thêm domain vào Firebase Console
- Kiểm tra OAuth redirect URIs
- Đợi 5-10 phút để config có hiệu lực

---

*Nếu gặp vấn đề, hãy tạo issue trên GitHub repository!*

## Quick Links

- [Firebase Console](https://console.firebase.google.com)
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Firestore Docs](https://firebase.google.com/docs/firestore)
- [GitHub OAuth Apps](https://github.com/settings/developers)
