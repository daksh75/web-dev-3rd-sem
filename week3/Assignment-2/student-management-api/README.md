# Student Management REST API

A simple RESTful API built with **Node.js** and **Express.js** to manage student records using in-memory array/JSON data (no database, no Mongoose — per assignment restrictions).

## Project Structure

```
student-management-api/
├── app.js                  # Express server setup, middleware, route mounting
├── package.json
├── routes/
│   └── studentRoutes.js    # All /students CRUD routes (modular routing)
├── middleware/
│   └── logger.js           # Custom logger middleware (method, URL, timestamp)
└── data/
    └── students.js         # In-memory array acting as the "database"
```

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   (or `npm run dev` if you have nodemon installed, for auto-restart on changes)

3. Server runs at: `http://localhost:3000`

## API Endpoints

| Method | Endpoint          | Description              | Success Code |
|--------|-------------------|---------------------------|--------------|
| GET    | `/students`       | Get all students          | 200          |
| GET    | `/students/:id`   | Get a single student by ID| 200          |
| POST   | `/students`       | Create a new student      | 201          |
| PUT    | `/students/:id`   | Update an existing student| 200          |
| DELETE | `/students/:id`   | Delete a student           | 200          |

### Request Body (POST / PUT)

```json
{
  "name": "Sneha",
  "course": "MCA"
}
```

## Error Handling

| Status Code | Meaning        | When it happens                                   |
|-------------|----------------|-----------------------------------------------------|
| 200         | Success        | Request completed successfully                     |
| 201         | Created        | New student successfully added                     |
| 400         | Bad Request    | Missing/invalid `name`/`course`, or invalid `:id`   |
| 404         | Not Found      | Student with given `id` doesn't exist / bad route   |
| 500         | Server Error   | Unexpected server-side error                        |

## Testing with Postman

1. Open Postman and create a new collection called **Student Management API**.
2. Add requests for each endpoint above, using `http://localhost:3000` as the base URL.
3. For POST and PUT, go to the **Body** tab → select **raw** → **JSON**, and enter:
   ```json
   { "name": "Sneha", "course": "MCA" }
   ```
4. Example test flow:
   - `GET /students` → should return the 3 seeded students.
   - `POST /students` with a valid body → returns `201` and the new student.
   - `GET /students/4` → returns the student you just created.
   - `PUT /students/4` with updated body → returns `200` and updated data.
   - `DELETE /students/4` → returns `200` confirming deletion.
   - `GET /students/999` → returns `404` (not found).
   - `POST /students` with empty body → returns `400` (bad request).

## Notes

- Data is stored **in memory** only — it resets every time the server restarts.
- Every incoming request is logged to the console by the custom logger middleware, e.g.:
  ```
  [2026-09-27T10:15:32.123Z] GET /students
  ```
