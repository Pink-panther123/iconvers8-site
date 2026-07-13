# iConvers8.ai — Next.js website

A production-ready Next.js site, built to deploy on Vercel.

## 1. Run it locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/iconvers8-site.git
git push -u origin main
```

## 3. Deploy on Vercel
1. Go to https://vercel.com/new
2. Import the GitHub repo
3. Click Deploy (no settings needed, Vercel detects Next.js automatically)

## 4. Connect your form (2 minutes)
1. Go to https://web3forms.com and enter your email to get a free Access Key
2. Open `app/page.jsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key
3. Commit and push. Form submissions now arrive in your email inbox.

## 5. Connect your Calendly
1. Copy your Calendly event link (e.g. https://calendly.com/yourname/30min)
2. In `app/page.jsx`, find `YOUR-CALENDLY-USERNAME` and replace the iframe URL with your link
3. Commit and push. Visitors can now book directly on the site.
