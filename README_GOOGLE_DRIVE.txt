FINANCE PWA V13 - GOOGLE DRIVE SYNC

1) Google Cloud Console
- Open Google Auth Platform > Clients.
- Create OAuth Client ID, type: Web application (or reuse an existing Web client).
- Add Authorized JavaScript origin:
  https://financepwavercel.vercel.app
  (If your production domain differs, add the exact https:// domain.)
- No client secret is used in this browser/PWA.

2) Enable API
- APIs & Services > Library > Google Drive API > Enable.

3) config.js
- Paste the Web OAuth Client ID into GOOGLE_CLIENT_ID.
Example:
  GOOGLE_CLIENT_ID: "1234567890-abc.apps.googleusercontent.com"

4) Deploy
Replace on GitHub/Vercel:
- index.html
- config.js
- service-worker.js
Then redeploy.

5) First use
- Open app > Chon Gmail & Ket noi Drive.
- Google asks for Drive file permission.
- The first connected account migrates the data currently visible on this device.
- App creates folder: FinancePWA
- App creates file: finance_data.json

6) Multi-device
On another phone/computer, connect the SAME Gmail then press Dong bo Drive.
The app compares local updatedAt and Drive updatedAt and uses the newer copy.

Notes
- Offline input still works and is stored in localStorage.
- Browser OAuth access tokens expire; if the app shows "Can ket noi lai", tap Drive/Sync and reconnect.
- "Doi TK" opens Google's account chooser for a different Drive account.
