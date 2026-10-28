SO THU CHI - BAN DONG BO SUPABASE + VERCEL

1. TAO SUPABASE
- Vao https://supabase.com -> New project.
- Mo SQL Editor -> New query.
- Copy toan bo setup.sql -> Run.

2. LAY THONG TIN API
- Project Settings -> API.
- Copy Project URL va Publishable key (hoac anon key neu dashboard cua ban hien ten cu).
- Mo config.js va thay:
  YOUR_SUPABASE_URL
  YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY

3. DANG NHAP EMAIL
- Supabase -> Authentication -> URL Configuration.
- Site URL = dia chi Vercel cua ban, vi du https://ten-app.vercel.app
- Them cung URL vao Redirect URLs.
- Email magic link co the dung ngay.

4. DANG NHAP GOOGLE (TUY CHON)
- Supabase -> Authentication -> Providers -> Google.
- Bat Google provider va nhap Google OAuth Client ID/Secret.
- Neu chua cau hinh Google, van dung Email Magic Link binh thuong.

5. VERCEL
- Tai ca thu muc finance_cloud_pwa len GitHub hoac deploy bang Vercel.
- Khong can Build Command.

6. DONG BO
- Cung 1 tai khoan email tren Xiaomi/iPhone/may tinh -> cung 1 bo du lieu.
- App van luu localStorage de dung duoc khi mat mang.
- Khi co mang va dang nhap, thay doi duoc day len Supabase sau ~0.7 giay.
- Nut dam may o header cho phep Dong bo ngay / Dang xuat / sao luu JSON.

LUU Y
- Khong dat service_role key vao config.js.
- Chi dung Publishable key/anon key va bat RLS bang setup.sql.
