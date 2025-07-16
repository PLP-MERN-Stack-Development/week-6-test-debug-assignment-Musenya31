# MERN Bug Tracker

A full-stack Bug Tracker application built with the MERN stack (MongoDB, Express, React, Node.js). Users can report, update, and track bugs in a project. The app is designed with robust testing and debugging practices for reliability.

---

## Features
- Report new bugs via a form
- View a list of all reported bugs
- Update bug statuses (open, in-progress, resolved)
- Delete bugs
- Comprehensive backend and frontend testing
- Error handling and debugging tools integrated

---

## Project Structure
```
mern-bug-tracker/
  backend/
    controllers/
    helpers/
    middleware/
    models/
    routes/
    tests/
    server.js
    .env
  frontend/
    src/
      api/
      components/
      tests/
      App.js
      ErrorBoundary.js
    ...
```

---

## Setup & Installation

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend
```bash
cd backend
npm install
# Create a .env file with:
# MONGO_URI=mongodb://localhost:27017/mern-bug-tracker
# PORT=5000
npx nodemon server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## Running Tests

### Backend
```bash
cd backend
npx jest
```

### Frontend
```bash
cd frontend
npm test
```

---

## Testing Approach & Coverage

### Backend
- **Unit tests:** For helper functions (e.g., `helpers/validateBug.js`).
- **Integration tests:** For API routes (e.g., `tests/bug.test.js`), mocking database calls with `jest-mock`.

### Frontend
- **Unit tests:** For components (form validation, button clicks, rendering states).
- **Integration tests:** For API calls and UI updates (e.g., `App.integration.test.js`).
- **UI states:** Tests for empty list, error message, etc.

---

## Debugging Techniques Used

- **Console logs:** Used in backend controllers and React components to trace values and state changes.
- **Chrome DevTools:** Inspect network requests and React component state.
- **Node.js Inspector:**
  - Start backend with: `node --inspect server.js`
  - Open `chrome://inspect` in Chrome to debug server-side code.
- **React Error Boundary:** Catches and displays UI errors gracefully.

---

## Error Handling

- **Backend:** Centralized Express error middleware (`middleware/errorHandler.js`).
- **Frontend:** React error boundary (`src/ErrorBoundary.js`).

---

## Documentation
- This README includes:
  - How to install and run the project
  - Steps to run tests and debugging techniques used
  - Explanation of the testing approach and coverage

---

## Submission
- Push your code to your GitHub Classroom repository.

---

## Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices)

---

## Author
Your Name


