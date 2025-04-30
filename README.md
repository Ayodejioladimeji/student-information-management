# Miva Student Information Management System

## Overview
This project is a simple Student Information Management System built with Next.js, TypeScript, and Chakra UI. It allows users to view, add, edit, and delete student records. The system includes API routes for managing student data and uses an in-memory database for data persistence.

## Features

**Student List Page:** Displays a list of all students with their names, registration numbers, and majors. Each student entry links to a detailed student information page.

**Dynamic Student Detail Page:** Shows the full profile information for a selected student, including name, registration number, major, date of birth, and GPA.

**Add/Edit Student:**
- Provides a form to add a new student record with fields for name, registration number, major, date of birth, and GPA.
- Allows users to edit existing student records.

**Delete Student:** Enables users to delete a student record from the system.

**API Routes:**
- GET /api/students: Fetches all students.
- POST /api/students: Adds a new student.
- GET /api/students/[id]: Fetches a single student's details.
- PUT /api/students/[id]: Updates a student's details.
- DELETE /api/students/[id]: Deletes a student.

**Database:** Uses an in-memory database to simulate the backend.

**UI:** Styled with Chakra UI for a responsive and user-friendly design.

## Technologies Used
- Next.js
- TypeScript
- Tailwind CSS
- Chakra UI

### Prerequisites
- Node.js installed
- npm or yarn installed

### Installation
1 - Clone the repository.  
2 - Navigate to the project directory in your terminal.  
3 - Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the application
1 - Start the development server  

```bash
npm run dev
# or
yarn dev
```

2 - Open your browser and navigate to http://localhost:3000 to view the application.

### Functionality

- Implemented API routes and dynamic routing in Next.js to manage student data.
- Utilized Server-Side Rendering (SSR) or Static Site Generation (SSG) for data fetching.

### Code Quality

- Developed using TypeScript for type safety and maintainability.
- Focused on clean, readable, and modular code.
- Separated concerns between API logic, UI components, and database operations.

### UI/UX

- Designed a simple and intuitive user interface.
- Applied responsive design principles using Chakra UI and Tailwind CSS.

### Documentation

- Provided this README file with instructions on how to run the project, install dependencies, and an overview of the development approach.