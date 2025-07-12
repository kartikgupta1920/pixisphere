# Pixisphere Frontend Assignment

A photographer listing and profile platform with filters, search, infinite scroll, and responsive UI.  
Built with **Next.js 13+ (App Directory)**, **React**, **Tailwind CSS**, and **Zustand** for state management.

---

## ✅ Features

- **Category Listing Page**
  - Photographer cards with name, image, price, rating, and tags
  - Filters: Price range slider, rating slider, style checkboxes, city dropdown
  - Sorting: Price low-to-high, rating high-to-low, recently added
  - Debounced search by name/location/tag
  - Infinite scroll/load more button
  - Fully responsive layout (desktop + mobile)

- **Photographer Profile Page**
  - Photographer details: bio, price, tags, gallery carousel
  - Reviews section with rating, comments, and dates
  - Send Inquiry button (modal form)

- **Other**
  - Skeleton loaders while fetching
  - Zustand for global filter state management

---

## 📁 Folder Structure Overview

pixisphere/
├── public/
├── src/
│ ├── app/
│ │ ├── category/
│ │ │ └── [city]/
│ │ │ └── page.js
│ │ ├── photographer/
│ │ │ └── [id]/
│ │ │ └── page.js
│ │ ├── layout.js
│ │ └── page.js
│ ├── components/
│ │ ├── Filters.jsx
│ │ ├── Gallery.jsx
│ │ ├── PhotographerCard.jsx
│ │ ├── ReviewList.jsx
│ │ ├── SearchBar.jsx
│ ├── lib/
│ │ └── api.js
│ ├── store/
│ │ └── photographerStore.js
│ ├── styles/
│ │ └── globals.css
│ └── db.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md



---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm install


2️⃣ Install JSON Server Globally
bash
Copy
Edit
npm install -g json-server
3️⃣ Start Mock API Server
bash
Copy
Edit
json-server --watch db.json --port 3001
4️⃣ Start Development Server
bash
Copy
Edit
npm run dev
🔄 Filtering & Debounce Notes
Zustand manages global filter state across components.

Lodash.debounce is used in the search bar to prevent rapid API/filter updates.

rc-slider powers price and rating sliders.

Filters are applied locally by filtering the fetched array from the mock API.

🚀 Live Demo
https://pixisphere-ten.vercel.app/category/Bengaluru

✅ Dependencies
React 18+

Next.js 13+ (App Directory)

Tailwind CSS

rc-slider

lodash.debounce

zustand

json-server (for local mock API)

