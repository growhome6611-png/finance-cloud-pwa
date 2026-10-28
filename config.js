// Google Drive sync configuration
// Create OAuth Client ID: Google Cloud Console > Google Auth Platform > Clients > Web application.
// Add your Vercel origin, e.g. https://financepwavercel.vercel.app, to Authorized JavaScript origins.
window.APP_CONFIG = {
  GOOGLE_CLIENT_ID: "PASTE_GOOGLE_WEB_CLIENT_ID_HERE",
  DRIVE_FOLDER_NAME: "FinancePWA",
  DRIVE_FILE_NAME: "finance_data.json"
};
