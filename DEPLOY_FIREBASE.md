## Firebase Hosting + GitHub Actions

This project deploys a Vite SPA (`dist/`) to Firebase Hosting via GitHub Actions.

### One-time setup (local)

1. Install Firebase CLI:

```bash
npm i -g firebase-tools
```

2. Login and initialize Hosting (only if you haven't already):

```bash
firebase login
firebase init hosting
```

- **public directory**: `dist`
- **single-page app rewrite**: Yes
- **GitHub Actions**: No (we already added our own workflows)

3. Update `.firebaserc`

Replace `YOUR_FIREBASE_PROJECT_ID` with your real Firebase project id.

### GitHub Secrets (required)

In GitHub: **Repo → Settings → Secrets and variables → Actions → New repository secret**

- **`FIREBASE_PROJECT_ID`**: your Firebase project id (e.g. `my-portfolio-123`)
- **`FIREBASE_SERVICE_ACCOUNT`**: the full JSON of a Firebase service account with Hosting deploy permissions

To generate the service account JSON:
- Firebase Console → Project settings → Service accounts → **Generate new private key**

### Deploy

- **Push to `main`** deploys to **live**.
- **Pull requests** deploy a **preview** channel and comment the preview URL on the PR.

