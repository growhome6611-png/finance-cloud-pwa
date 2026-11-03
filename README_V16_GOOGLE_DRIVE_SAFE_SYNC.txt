FINANCE PWA V16 - GOOGLE DRIVE SAFE SYNC
===========================================

Mục tiêu:
- Bỏ Supabase khỏi luồng dữ liệu tài chính.
- Google Drive/FinancePWA/finance_data.json là bản dữ liệu trung tâm.
- Chặn thiết bị cũ ghi đè bản mới bằng version locking (HTTP 409).
- Tự tạo backup trước mỗi lần ghi đè và giữ 10 bản gần nhất.
- Khi mở app hoặc có mạng trở lại: chạy "Đồng bộ thông minh", không blind-push.

Vercel Environment Variables:
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_REDIRECT_URI=https://<TEN-DOMAIN>.vercel.app/api/google-callback

Google Cloud:
- OAuth Client type: Web application
- Authorized redirect URI phải đúng 100% với GOOGLE_REDIRECT_URI
- Enable Google Drive API

LƯU Ý NÂNG CẤP TỪ BẢN CŨ:
1. Trên điện thoại đang có dữ liệu ĐÚNG/MỚI, trước khi redeploy hãy dùng nút "Sao lưu JSON" một lần.
2. Deploy V16.
3. Mở điện thoại trước, đăng nhập Gmail, chọn "Đẩy lên Drive" nếu Drive chưa có dữ liệu đúng.
4. Sau đó mở máy tính, đăng nhập cùng Gmail và bấm "Đồng bộ thông minh".
5. Không cần Supabase nữa.

Các nút:
- Tải từ Drive: Drive -> thiết bị.
- Đẩy lên Drive: thiết bị -> Drive, nhưng bị chặn nếu thiết bị chưa thấy phiên bản Drive mới nhất.
- Đồng bộ thông minh: so sánh phiên bản/thời gian và chọn hướng an toàn.

Thư mục Drive:
FinancePWA/
  finance_data.json
  Backups/
    finance_v1_....json
    ...
