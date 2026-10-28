FINANCE PWA V15 - GOOGLE DRIVE OAUTH REDIRECT (VERCEL SERVERLESS)
================================================================

V15 khong luu Google access token trong JavaScript/PWA. OAuth chay qua /api tren Vercel.
Token/refresh token duoc luu trong cookie HttpOnly, giup doi Gmail on dinh hon tren Android/PWA.

1) GOOGLE CLOUD - OAUTH CLIENT "Finance PWA"
-------------------------------------------
Loai client: Web application.

Authorized JavaScript origins (co the giu):
https://financepwavercel.vercel.app

Authorized redirect URIs - BAT BUOC them CHINH XAC:
https://financepwavercel.vercel.app/api/google-callback

Google Drive API phai o trang thai Enabled.

2) LAY CLIENT ID + CLIENT SECRET
--------------------------------
Vao Google Auth Platform > Clients > Finance PWA.
Lay:
- Client ID
- Client secret

KHONG dua Client secret vao GitHub, index.html hoac config.js.

3) VERCEL ENVIRONMENT VARIABLES
-------------------------------
Vao Vercel > Project financepwavercel > Settings > Environment Variables.
Them 3 bien cho Production (va Preview neu can):

GOOGLE_CLIENT_ID = <Client ID cua Finance PWA>
GOOGLE_CLIENT_SECRET = <Client secret cua Finance PWA>
GOOGLE_REDIRECT_URI = https://financepwavercel.vercel.app/api/google-callback

Sau khi them/sua Environment Variables, phai Redeploy de deployment moi nhan bien moi.

4) FILE CAN UPLOAD LEN GITHUB
-----------------------------
- index.html
- config.js
- service-worker.js
- vercel.json
- thu muc api/ (toan bo file ben trong)

Quan trong: V15 KHONG chi co 3 file nhu V14. Neu thieu thu muc api/, dang nhap/Drive se khong hoat dong.

5) CACH HOAT DONG
-----------------
Dang nhap:
App -> /api/google-login -> Google -> /api/google-callback -> App

Doi tai khoan:
App luu du lieu local -> /api/google-login?switch=1 -> xoa cookie session cu -> Google account chooser -> Gmail moi -> App.

Dong bo:
App goi /api/drive-data. Server Vercel dung token HttpOnly de doc/ghi:
Google Drive/FinancePWA/finance_data.json

6) KIEM TRA SAU DEPLOY
----------------------
- Mo tab an danh.
- Bam Chon Gmail & Ket noi Drive.
- Chon Gmail A, dong bo.
- Bam Doi TK, Google phai mo trang chon tai khoan.
- Chon Gmail B, ten email tren app phai doi sang B.
- Bam Dong bo, Drive cua B se co file rieng.

Neu gap redirect_uri_mismatch: kiem tra GOOGLE_REDIRECT_URI va Authorized redirect URIs phai trung 100%, ke ca https, domain va duong dan /api/google-callback.
