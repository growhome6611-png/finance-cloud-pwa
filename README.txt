SỔ THU CHI & TÀI CHÍNH - CLOUD PWA v3 (28/10/2026)

ĐÃ SỬA / BỔ SUNG
1. Thanh tài khoản luôn hiển thị rõ "Đăng nhập" hoặc "Đổi TK" ở đầu ứng dụng.
2. Bảng Tài khoản & Đồng bộ có: tài khoản hiện tại, trạng thái, lần đồng bộ cuối, lấy dữ liệu Cloud, đẩy dữ liệu lên Cloud, đồng bộ ngay, đổi tài khoản Google, đăng xuất.
3. Đổi tài khoản Google dùng bộ chọn tài khoản, tránh tự quay lại tài khoản cũ.
4. Dữ liệu cục bộ được tách theo user_id; tài khoản khác không dùng chung dữ liệu local.
5. Đồng bộ đa thiết bị: tự kiểm tra Cloud mỗi 15 giây và khi quay lại ứng dụng/cửa sổ.
6. Nếu máy có thay đổi ngoại tuyến chưa gửi và mới hơn Cloud, app ưu tiên đẩy thay đổi đó lên để giảm nguy cơ mất dữ liệu.
7. Service Worker nâng cache lên v3 và index/config dùng no-store để tránh máy tiếp tục chạy giao diện cũ sau khi deploy.

CẤU HÌNH SUPABASE
- config.js đã chứa SUPABASE_URL và Publishable key hiện có.
- Chạy setup.sql trong Supabase SQL Editor nếu bảng user_finance_data/RLS chưa được tạo.
- Authentication > Providers > Google phải được bật nếu dùng nút Google.
- Authentication > URL Configuration cần có URL Vercel chính thức của ứng dụng trong Site URL / Redirect URLs.

ĐƯA LÊN VERCEL
- Các file index.html, config.js, service-worker.js, manifest.webmanifest, vercel.json và thư mục icons phải nằm ở thư mục gốc của deployment.
- Có thể thay toàn bộ file cũ bằng bộ file trong ZIP này trên dự án Vercel hiện tại; không cần tạo project mới.
- Sau deploy, mở lại URL. Nếu PWA đã cài từ bản rất cũ, đóng app rồi mở lại; bản service worker mới sẽ xóa cache v1 cũ.
