# EduPulse – Classroom Feedback & Learning Analytics

> **Lắng nghe lớp học qua dữ liệu**

EduPulse là nền tảng thu thập phản hồi lớp học và phân tích dữ liệu học tập. Dự án được xây dựng trong khuôn khổ môn học "Khoa học Dữ liệu và Ứng dụng trong Giáo dục".

---

## 🎯 Tổng quan

EduPulse cho phép:
- **Sinh viên** trả lời khảo sát mức độ hiểu bài nhanh chóng
- **Giảng viên** xem thống kê và biểu đồ phân phối phản hồi trực quan
- Hệ thống thu thập và xử lý dữ liệu tự động (Phase 2: Firebase Firestore)

---

## ✨ Tính năng chính

### Trang Chủ (`/`)
- Giới thiệu EduPulse và tagline
- 2 thẻ chọn vai trò: Sinh viên / Giảng viên
- Sơ đồ quy trình 3 bước

### Trang Sinh Viên (`/student`)
- Khảo sát mức độ hiểu bài (5 mức độ)
- Lưu trạng thái phản hồi (localStorage – DEMO)
- Thông báo thành công sau khi gửi
- Nút đặt lại để trả lời lại

### Trang Giảng Viên (`/teacher`)
- 3 thẻ thống kê: Tổng phản hồi, Điểm TB, Tỷ lệ mức 4-5
- Biểu đồ thanh phân phối điểm (Recharts)
- Thanh tiến trình chi tiết theo mức độ
- Nút thêm phản hồi mô phỏng ngẫu nhiên
- Nút đặt lại về dữ liệu gốc

---

## 🛠 Công nghệ sử dụng

| Thành phần | Công nghệ |
|-----------|-----------|
| Framework | React 19 + Vite |
| Ngôn ngữ | JavaScript (JSX) |
| Routing | React Router v7 |
| Icons | Lucide React |
| Biểu đồ | Recharts |
| Styling | CSS Modules + CSS Variables |
| Lưu trữ demo | localStorage (trình duyệt) |

---

## 📦 Cài đặt

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Cài đặt dependencies

```bash
npm install
```

---

## 🚀 Chạy cục bộ

```bash
npm run dev
```

Mở trình duyệt tại: **http://localhost:5173**

---

## 🏗 Build production

```bash
npm run build
```

File output sẽ nằm trong thư mục `dist/`.

Để xem trước build:

```bash
npm run preview
```

---

## ⚠️ Giới hạn hiện tại (Phase 1)

- **Không có backend thật**: Tất cả dữ liệu được lưu trong `localStorage` của trình duyệt.
- **Không đồng bộ thiết bị**: Dữ liệu chỉ tồn tại trên trình duyệt hiện tại.
- **Không có xác thực**: Không có login/logout thật.
- **Dữ liệu reset**: Khi xóa localStorage hoặc dùng trình duyệt riêng tư, dữ liệu sẽ về mặc định.

---

## 🔮 Kế hoạch Phase 2 – Firebase Integration

- **Firebase Authentication**: Đăng nhập bằng email/Google
- **Firestore**: Lưu trữ phản hồi trên cloud
- **Real-time sync**: Cập nhật dashboard tức thì khi sinh viên gửi phản hồi
- **Multi-classroom**: Quản lý nhiều lớp học và nhiều bảng khảo sát

Hàm trong `feedbackService.js` đã được thiết kế để dễ dàng thay thế bằng Firebase API.

---

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Navbar.jsx          # Thanh điều hướng
│   ├── Navbar.module.css
│   ├── StatCard.jsx        # Thẻ thống kê
│   ├── StatCard.module.css
│   ├── SurveyCard.jsx      # Thẻ khảo sát sinh viên
│   ├── SurveyCard.module.css
│   ├── FeedbackChart.jsx   # Biểu đồ Recharts
│   └── FeedbackChart.module.css
├── pages/
│   ├── Home.jsx            # Trang chủ
│   ├── Home.module.css
│   ├── Student.jsx         # Trang sinh viên
│   ├── Student.module.css
│   ├── TeacherDashboard.jsx # Dashboard giảng viên
│   └── TeacherDashboard.module.css
├── data/
│   └── mockResponses.js    # 30 phản hồi mô phỏng gốc
├── services/
│   └── feedbackService.js  # Lớp trừu tượng dữ liệu (localStorage)
├── utils/
│   └── analytics.js        # Hàm tính toán thống kê
├── App.jsx                 # Router và layout chính
├── main.jsx                # Entry point
└── index.css               # CSS toàn cục + Design tokens
```

---

## 🐙 Đẩy lên GitHub

```bash
# 1. Khởi tạo git repository
git init
git add .
git commit -m "feat: EduPulse Frontend MVP v0.1"

# 2. Tạo repository trên GitHub (tại github.com)

# 3. Kết nối và đẩy code
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy lên GitHub Pages

### Cách 1: Dùng gh-pages package

```bash
# Cài gh-pages
npm install --save-dev gh-pages

# Thêm vào package.json:
# "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

### Cách 2: GitHub Actions (tự động)

Tạo file `.github/workflows/deploy.yml` để tự động build và deploy khi push lên `main`.

> **Lưu ý**: Khi deploy lên GitHub Pages, đảm bảo `vite.config.js` có `base: '/YOUR_REPO/'`

---

## 👨‍💻 Tác giả

Dự án thực hành môn **Khoa học Dữ liệu và Ứng dụng trong Giáo dục**

---

*EduPulse – Educational Technology Project*
