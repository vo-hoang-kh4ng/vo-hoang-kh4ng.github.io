---
layout: post
title: "Computer Vision với OpenCV - Xử lý ảnh thông minh"
date: 2025-01-26 14:00:00 +0700
categories: [AI, Computer Vision, OpenCV]
tags: [computer-vision, opencv, image-processing, python]
author: Vo Hoang Khang
---

# Computer Vision với OpenCV - Xử lý ảnh thông minh 

Computer Vision là một lĩnh vực thú vị của AI, cho phép máy tính "nhìn" và hiểu được nội dung của hình ảnh. Trong bài viết này, tôi sẽ hướng dẫn bạn cách sử dụng OpenCV để xử lý ảnh một cách thông minh.

## OpenCV là gì?

OpenCV (Open Source Computer Vision Library) là thư viện mã nguồn mở phổ biến nhất cho Computer Vision. Nó hỗ trợ hơn 2500 thuật toán tối ưu hóa và được sử dụng rộng rãi trong các ứng dụng thực tế.

## Cài đặt OpenCV

`ash
pip install opencv-python
pip install opencv-contrib-python  # Phiên bản đầy đủ
`

## Xử lý ảnh cơ bản

### 1. Đọc và hiển thị ảnh

`python
import cv2
import numpy as np

# Đọc ảnh
img = cv2.imread('image.jpg')

# Hiển thị ảnh
cv2.imshow('Image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
`

### 2. Chuyển đổi màu sắc

`python
# Chuyển từ BGR sang RGB
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Chuyển sang ảnh xám
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
`

## Phát hiện khuôn mặt

`python
# Load cascade classifier
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Phát hiện khuôn mặt
faces = face_cascade.detectMultiScale(img_gray, 1.1, 4)

# Vẽ hình chữ nhật quanh khuôn mặt
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
`

## Xử lý video

`python
# Mở camera
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Xử lý frame
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Hiển thị frame
    cv2.imshow('Video', gray)
    
    # Thoát khi nhấn 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
`

## Ứng dụng thực tế

- **An ninh**: Hệ thống giám sát thông minh
- **Y tế**: Chẩn đoán hình ảnh y khoa
- **Giao thông**: Hệ thống giao thông thông minh
- **Giải trí**: Bộ lọc ảnh, AR/VR

## Kết luận

OpenCV là công cụ mạnh mẽ cho Computer Vision. Với kiến thức cơ bản này, bạn có thể bắt đầu xây dựng các ứng dụng thú vị!

---

*Bạn có muốn tôi hướng dẫn chi tiết về phần nào không? Hãy để lại comment!*

<!-- Utterances Comments -->
<script src="https://utteranc.es/client.js"
        repo="vo-hoang-kh4ng/vo-hoang-kh4ng.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
