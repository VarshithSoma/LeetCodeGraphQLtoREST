# Leetcode API

LeetCode primarily has a GraphQL API without official REST support or documentation, this project aims to make accessing LeetCode data more approachable by providing a simple and user-friendly REST API—eliminating the need to manually write GraphQL queries.

---

## Features

- Fetch LeetCode user profiles, badges, submissions, contests, calendars, and problems
- Easy-to-use REST endpoints
- Built with TypeScript
- Easily testable via Postman

---

## Folder Structure

src/
┣ 📂api - Functions for making API calls to LeetCode
┣ 📂graphql - GraphQL queries extracted via LeetCode's network tab
┣ 📂routes - Route handlers for user and problem-related endpoints
┣ 📂services - Controller logic linked to routes
┣ 📂types - TypeScript type definitions
┗ 📜index.ts - Application entry point

---

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/VarshithSoma/leetcode-graphql-to-rest.git
   cd leetcode-rest-api
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create config.env file and add PORT
   ```bash
   PORT=9009
   ```
4. Start the development server:
   ```bash
   yarn run dev
   ```
5. To compile TypeScript to JavaScript, run:
   ```bash
   tsc -b
   ```

---

## Live API

```bash
https://leetcode-graphql-to-rest.onrender.com
```

## API Endpoints

| Endpoint                                  | Description                    |
| ----------------------------------------- | ------------------------------ |
| `GET /:username`                          | Get user profile Data          |
| `GET /:username/getBadges`                | Get user Badges                |
| `GET /:username/userSubmissions/:limit`   | Get user Submissions           |
| `GET /:username/acUserSubmissions/:limit` | Get Accepted user Submissions  |
| `GET /:username/userCalendar`             | Get user submission Calendar   |
| `GET /:username/allContests`              | Get all Contest                |
| `GET /:username/allAttendedContests`      | Get all attended user Contests |
| `GET /problems/:limit`                    | Get leetcode problems data     |

---

## Scripts

| Command        | Description                |
| -------------- | -------------------------- |
| `yarn run dev` | Run server with nodemon    |
| `yarn build`   | Compile TypeScript         |
| `yarn start`   | Start server from built JS |

---
