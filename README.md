## 1. Clone và Cài đặt
### Tải mã nguồn từ GitHub về máy
```
git clone https://github.com/qckhanh195/mini-project.git
```

### Cài đặt tất cả các thư viện cần thiết (node_modules)
```
npm install
```

## 2. Chạy dự án (Development)
### Khởi động server để lập trình và xem thay đổi tức thì
```
npm run dev
```
### Mở trình duyệt tại: ```http://localhost:5173```

## 3. Kiểm tra bản Build (Production Preview)
### Đóng gói dự án vào thư mục dist
```
npm run build
```

### Chạy thử bản build để kiểm tra lỗi đường dẫn/file (giống trên GitHub)
```
npx vite preview
```

## 4. Triển khai (Deploy)
### Đẩy bản build lên nhánh gh-pages để cập nhật trang web công khai
```
npm run deploy
```