---
title: "Thiết lập blog cá nhân với Hugo + PaperMod"
date: 2026-07-18T21:30:00+07:00
draft: false
tags: ["hugo", "how-to"]
summary: "Ghi chú nhanh các bước dựng blog tĩnh với Hugo, theme PaperMod, và deploy lên GitHub Pages."
---

## Vì sao chọn Hugo?

- Build cực nhanh, không cần server, chỉ cần host file tĩnh.
- Viết bài bằng Markdown, quản lý bằng Git.
- Theme [PaperMod](https://github.com/adityatelange/hugo-PaperMod) tối giản, đọc dễ chịu — phong cách giống các blog kỹ thuật nổi tiếng như Lil'Log.

## Các bước chính

```bash
hugo new site my-blog
cd my-blog
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

Sau đó cấu hình `hugo.toml`, thêm bài viết mới trong `content/posts/`, và chạy thử:

```bash
hugo server -D
```

## Deploy

Dùng GitHub Actions để build và deploy tự động lên GitHub Pages mỗi khi push code lên nhánh `main`.

Vậy là xong — một blog cá nhân nhẹ, nhanh, miễn phí!
