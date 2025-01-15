# Blog Website

Welcome to the **Blog Website**! This project is a modern web application where users can read, search, and comment on posts. It features an intuitive user interface powered by Angular and Material UI and a robust backend built with Spring Boot, MySQL, JPA, and Lombok.

![Logo](https://via.placeholder.com/150?text=Blog+Website+Logo)

## Features ✨

- 📖 **Browse Posts**: Read through various blog posts.
- 🔍 **Search Functionality**: Quickly find posts by keywords.
- 💬 **Comments**: Any user can post comments on blog posts.
- 📊 **Backend API**: Robust and scalable API using Spring Boot.
- 🎨 **Modern UI**: Responsive design with Angular and Material UI.

## Tech Stack 🚀

### Frontend
- **Angular**: Framework for building dynamic web applications.
- **Material UI**: For sleek and modern UI components.

### Backend
- **Spring Boot**: Backend framework for handling API requests.
- **MySQL**: Database for storing posts and comments.
- **JPA**: ORM for database interaction.
- **Lombok**: Simplifies Java code with annotations.

## Installation 🛠️

### Prerequisites
- Node.js and npm
- Angular CLI
- Java (JDK 11 or higher)
- MySQL

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/meetmodeon/blog-website.git
   cd blog-website
   ```

2. **Setup Backend**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Configure `application.properties` with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/blog
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     ```
   - Run the backend application:
     ```bash
     ./mvnw spring-boot:run
     ```

3. **Setup Frontend**:
   - Navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the Angular development server:
     ```bash
     ng serve
     ```

4. **Access the Application**:
   - Frontend: `http://localhost:4200`
   - Backend API: `http://localhost:8080`

## Usage 🖱️

1. **Homepage**: Browse through all blog posts.
2. **Search**: Use the search bar to find posts by keywords.
3. **Comment**: Open a post and add your thoughts in the comments section.

## Screenshots 📸

![Homepage Screenshot](https://via.placeholder.com/800x400?text=Homepage)
![Post Screenshot](https://via.placeholder.com/800x400?text=Post+with+Comments)

## Emojis Used

- ✨ Highlights features.
- 🚀 Indicates tech stack.
- 🛠️ Represents installation instructions.
- 📸 Denotes screenshots.

## Contributing 🤝

Contributions are welcome! Please fork the repository and create a pull request.

## License 📄

This project is licensed under the [MIT License](LICENSE).

---

🌟 **Thank you for visiting! Feel free to explore and contribute!**
