### **SocialJSON - A Simple Social Media App**  

🚀 Build a social media app using **Next.js, TypeScript, Tailwind CSS, and Axios**, powered by the **JSONPlaceholder API**.  

📺 **Watch the Full Tutorial:** [![YouTube Video](https://img.shields.io/badge/Watch%20on-YouTube-red?logo=youtube)](https://www.youtube.com/watch?v=mTz4m91WW9w)  

---

## **🔹 Tech Stack**  
- **[Next.js](https://nextjs.org/)** - React Framework for SSR & SSG  
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript for better development  
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework  
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for API requests  
- **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/)** - Free REST API for mock data  

---

## API Endpoints
**Base URL:** `https://jsonplaceholder.typicode.com`

### ✨ Posts
- **All posts:** `[BASE_URL]/posts`
- **Specific post:** `[BASE_URL]/posts/{postId}`
- **Posts from a specific user:**  
  - `[BASE_URL]/users/{userId}/posts`  
  - `[BASE_URL]/posts?userId={userId}`  

### 👤 Users
- **All users:** `[BASE_URL]/users`

### 💬 Comments
- **All comments:** `[BASE_URL]/comments`
- **Comments of a specific post:**  
  - `[BASE_URL]/posts/{postId}/comments`  
  - `[BASE_URL]/comments?postId={postId}`  

### 📉 Todos
- **Todos of a specific user:** `[BASE_URL]/users/{userId}/todos`

### 📸 Albums & Photos
- **Albums of a specific user:** `[BASE_URL]/users/{userId}/albums`
- **Photos of a specific album:** `[BASE_URL]/albums/{albumId}/photos`

---

## **📂 Installation & Setup**  

1️⃣ Clone the repository  
```bash
git clone https://github.com/your-username/socialjson.git
cd socialjson
```
  
2️⃣ Install dependencies  
```bash
npm install
# or
yarn install
```
  
3️⃣ Run the development server  
```bash
npm run dev
# or
yarn dev
```
  
4️⃣ Open your browser and visit  
```
http://localhost:3000
```

---

## **📢 Contributing**  
Feel free to fork this repo, make changes, and submit a PR! Any feedback is welcome.  

📩 Let me know in the YouTube comments if you have any questions or ideas for future tutorials!  

---

⭐ **Don't forget to star the repo if you found it helpful!** 🌟  

#NextJS #TypeScript #WebDevelopment #TailwindCSS #Axios #SocialJSON
