# Trackit Challenge
# Description
Trackit Challenge is a web application built with Vue.js, designed to manage clients and sites efficiently. It allows users to view and manage client information, site details, and associated data in a user-friendly interface.

This template should help get you started developing with Vue 3 in Vite.

## Table of Contents
Project Setup
Project Structure
Features
Installation
Running the Application
Testing
Areas for Improvement

## Project Setup
The project is set up with the following configurations:

TypeScript: For static type checking.
JSX Support: To allow JSX syntax in Vue components.
Vue Router: For single-page application development.
Pinia: For state management.
Vitest: For unit testing.
ESLint: For code quality and linting.
Cypress: For end-to-end testing.

## Project Structure
The project follows a standard Vue.js structure with some additional directories for organization:

 <img width="395" alt="Screenshot 2024-07-23 at 00 16 57" src="https://github.com/user-attachments/assets/83b3fb04-21ed-4a23-b8a7-b2e5e7274b17">
 
## Features
1. Client and Site Management: View, search, and navigate through clients and sites.
2. Responsive Design: Uses Tailwind CSS for responsive and modern UI.
3. State Management: Pinia is used for managing application state.
4. Routing: Vue Router for navigating between different views.
5. Loading Indicators: Custom and simple loaders for better UX during data fetching.
6. Dropdown for Toggle: Users can toggle between 'Clients' and 'Sites' using a dropdown menu to experience the      
    pagination functionality.
7. Pagination: Previous and next buttons only appear when there is a previous or next page available.
8. Debounce: A debounce of 1 sec to make api call when filtering results


## Installation
To set up the project locally, follow these steps:

 1. Clone the repository:
    git remote add origin https://github.com/scriptlord/tracktik.git
    cd tracktik-challenge
    branch: main

2. Install dependencies:

## Running the Application
    npm run dev

The application will be available at http://localhost:3000.



## Areas for Improvement
While the project is functional and includes many features, there are areas for improvement:

1. Testing: Implement comprehensive unit and end-to-end tests to cover all components and views.

2. Performance Optimization: Optimize data fetching and rendering performance.

3. Accessibility: Ensure the application meets accessibility standards.

4. Documentation: Detailed documentation for each component and utility function.


## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss potential changes.

## License
This project is licensed under the MIT License.
