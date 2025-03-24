# Google Books API Data Visualization

## Overview
This project is a web application that fetches book-related data from the Google Books API and visualizes it interactively using Chart.js. The frontend is built with React, and the backend handles API requests using Node.js. The application allows users to explore book data through different charts, offering an engaging way to analyze various book attributes.

## Features
- **Fetches data** from the Google Books API to display book-related information.
- **Interactive visualizations** using Chart.js (e.g., bar charts, line graphs).
- **Responsive UI** built with React, ensuring compatibility across devices.
- **Component-based architecture** for scalable and maintainable code.
- **Filters and dropdowns** to allow users to interact with and refine the data displayed.

## Technologies Used
- **Frontend**: React, Chart.js, CSS
- **Backend**: Node.js
- **API**: Google Books API
- **State Management**: React hooks
- **Styling**: CSS for modern UI and responsiveness

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **npm** for package management

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AngievR05/241077_-angie-van-rooyen-formative-one-shelfy.git
2. **Navigate to the project directory**:
   cd 241077_-angie-van-rooyen-formative-one-shelfy
3. **Install dependencies**: To install all necessary packages for both frontend and backend:
   npm install
4. **Set up environment variables**: Create a .env file in the root directory of the project and add any required environment variables, such as your Google Books API key or backend configurations (if any).
5. **Run the development server**: To start the development server and launch the application, run:
   npm start

## Approach
1. **Data Fetching**: The app asynchronously fetches book-related data from the Google Books API using React’s hooks (e.g., useEffect). The API data includes book titles, authors, publication dates, and more, which are visualized in various formats like bar and line charts.
2. **State Management**: React’s state (useState) and hooks (e.g., useEffect, useContext) are used to manage the app’s state. Data is stored in the component’s state and passed between components for rendering.
3. **Data Visualization**: Chart.js is used to create dynamic, interactive charts to display book data. Chart types include Bar, Line, Radar and Pie charts to showcase various trends and comparisons of book attributes.
4. **Component-Based Design**: The UI is broken into reusable components (e.g., BookCard, ChartContainer, DropdownFilter). Components are structured to maintain separation of concerns and ensure modularity.
5. **Styling & Responsiveness**: CSS is used to create a modern, clean layout. The design is responsive, ensuring it works well on both desktop and mobile devices.


## License
This project is open-source and licensed under the MIT License. Feel free to contribute and improve!

---
### Contributions
Feel free to fork this repository and submit pull requests for new features, improvements, or bug fixes.

Fork the repository to your GitHub account.

Create a new branch for your changes.

Make your modifications and ensure everything works as expected.

Submit a pull request with a detailed description of the changes.

### Contact
For any inquiries or questions, please reach out to 241077@virtualwindow.co.za 