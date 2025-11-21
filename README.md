# Chat App — Tagging & Dynamic Autocomplete

**Stack:** Next.js (React) frontend, Node.js + Express backend (REST API), Redux for global state.  
**Objective:** A WhatsApp-style chat UI supporting trigger-based dynamic autocomplete (e.g., `@` and `#`), inline tags, and single-action tag deletion.

---

## Architecture & Tech Choices

- **Next.js**: Rapid frontend with SSR and single-repo deploy.
- **React**: Component-based UI and controlled input handling.
- **Redux**: Centralized state for messages and suggestions.
- **Express**: Backend REST API for suggestions and dynamic updates.
- **Database**: Optional MongoDB/SQLite; demo uses JSON or in-memory.
- **Communication**: REST endpoints:
  - `GET /api/tags?search=<query>&trigger=@` — returns suggestions matching prefix.
  - `POST /api/tags` — add new suggestion.
- **Styling**: CSS Modules or Tailwind for clean UI.

---

## Folder Structure

```

/frontend
/components
ChatWindow.jsx
MessageInput.jsx  
SuggestionList.jsx

/store
messagesSlice.js
suggestionsSlice.js
/utils
caretUtils.js
tokenize.js
/pages
_app.js
index.js
/styles
ChatWindow.module.css
MessageInput.module.css
SuggestionList.module.css

/backend
index.js
/routes
tags.js
/data
tags.json

````

---

## How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/<username>/<repo>.git
cd <repo>
````

2. Install dependencies:

```bash
cd frontend && npm install
cd ../backend && npm install
```

3. Start backend (port 7001):

```bash
cd backend
npm run dev  # or node index.js
```

4. Start frontend (port 3000):

```bash
cd frontend
npm run dev
```

5. Open in browser:

```
http://localhost:3000
```

---

## Key Features

* Trigger characters (`@`, `#`) fetch suggestions dynamically.
* Inline tags are styled and act as atomic units.
* Backspace removes a full tag.
* Messages are displayed in a scrollable chat window.
* Suggestion list can update dynamically from backend API.
* Multiple messages supported.

---

## Tagging & Autocomplete Algorithm

1. **Detect trigger token** before caret in input.
2. **Fetch suggestions** from `GET /api/tags?search=<query>&trigger=@`.
3. **Display suggestions** in a dropdown with keyboard navigation.
4. **Select suggestion** to replace token with inline tag.
5. **Backspace behavior**: removes entire tag if caret is immediately after token.
6. **Send message**: serializes tokens with tag metadata into Redux store.

---

## UI/UX Notes

* Controlled `textarea` with overlay rendering tokens as styled spans.
* Chat window displays all messages with latest at bottom.
* Messages persist in Redux store; suggestions persist in backend JSON.

---

## Future Improvements

* Persist messages and tags in a cloud DB.
* Add WebSocket/SSE for real-time updates across clients.
* Accessibility improvements (screen readers).
* Multi-line editing for long messages.

---

## API Endpoints

* **GET /api/tags?search=<query>&trigger=@** → Returns suggestions matching the typed prefix.
* **POST /api/tags** → Add a new tag dynamically.

---

## Key Design Decisions

* Redux centralizes state for easier message and suggestion management.
* Hybrid hidden `textarea` + overlay for token rendering avoids contenteditable quirks.
* Tags are represented internally as objects `{ id, label, trigger }` for consistent rendering.

```
