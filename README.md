# Starter Express App

This is a simple starter Express.js application designed to help you get started with building a web server using Node.js and Express. The app demonstrates the basic setup of an Express server and includes a few endpoints to show how to respond to HTTP requests.

## Features

- **Express Server**: A basic server built using the Express.js framework.
- **ES6 Syntax**: The project uses modern JavaScript features (`import/export`) for cleaner and more maintainable code.
- **JSON Middleware**: Automatically parses incoming request bodies in JSON format, making it easy to handle API requests.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the App](#running-the-app)
  - [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Getting Started

### Prerequisites

To run this project, you'll need:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using:

   \`\`\`bash
   git clone https://github.com/asemshaath/starter-express-app.git
   \`\`\`

2. **Navigate to the Project Directory**

   Change into the project directory:

   \`\`\`bash
   cd starter-express-app
   \`\`\`

3. **Install Dependencies**

   Install the required dependencies using npm:

   \`\`\`bash
   npm install
   \`\`\`

## Usage

### Running the App

1. **Start the Server**

   To start the Express server, use the following command:

   \`\`\`bash
   npm start
   \`\`\`

   The server will start on \`http://localhost:3000\` by default. You should see a message in the console indicating that the server is running.

2. **Access the Application**

   - **Home Page**: Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the home page message: \`"Hello, World!"\`.
   - **API Endpoint**: Go to [http://localhost:3000/api/data](http://localhost:3000/api/data) to receive a sample JSON response.

### Endpoints

The application currently supports two basic endpoints:

- **GET \`/\`**: Responds with a simple text message \`"Hello, World!"\`.
  
  Example:

  \`\`\`sh
  curl http://localhost:3000/
  \`\`\`

  Response:

  \`\`\`text
  Hello, World!
  \`\`\`

- **GET \`/api/data\`**: Returns a sample JSON response.

  Example:

  \`\`\`sh
  curl http://localhost:3000/api/data
  \`\`\`

  Response:

  \`\`\`json
  {
    "message": "Hello from the API!"
  }
  \`\`\`

## Project Structure

- **src/index.js**: Contains the core Express server code.
- **package.json**: Defines project metadata, scripts, and dependencies.
- **README.md**: This file, containing project documentation.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/your-feature\`).
3. Make your changes and commit them (\`git commit -m 'Add some feature'\`).
4. Push to the branch (\`git push origin feature/your-feature\`).
5. Open a Pull Request.

Feel free to open issues for any bugs or feature suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- **Asem Shaath** - [LinkedIn](https://www.linkedin.com/in/asemshaath/)

For any inquiries or support, you can reach out via LinkedIn.

## Acknowledgements

- The project was created as a basic template for quickly setting up an Express server.
- Thanks to the open-source community for providing helpful resources and tools.

---

Thank you for using this starter project! Happy coding!
