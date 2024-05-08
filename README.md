# Comprehensive Food Delivery Web Application with Microservice Architecture

This project utilizes a microservice architecture and incorporates various technologies including Nest.js, TypeScript, Next.js, Prisma, Docker, and GraphQL. The application aims to provide a seamless experience for Admins, Users, Restaurant Owners, and Delivery Personnel.

## Overview

This Food Delivery Web Application is designed to streamline the process of ordering food from restaurants to doorstep delivery. By employing a microservice architecture, each major functionality (Admin, User, Restaurant Owner, and Delivery Man) is encapsulated within its own service, ensuring scalability, flexibility, and easier maintenance.

## Technologies Used

- **Nest.js**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **Next.js**: A React framework for server-side rendering, providing enhanced performance and SEO benefits.
- **Prisma**: A modern database toolkit for Node.js and TypeScript that simplifies database access with type-safe queries.
- **Docker**: A platform for developing, shipping, and running applications in containers, ensuring consistent environments across different systems.
- **GraphQL**: A query language for APIs that enables clients to request only the data they need, resulting in more efficient communication between client and server.

## Architecture

The application is divided into separate microservices, each catering to specific user roles:

1. **Admin Service**: Handles administrative tasks such as managing user accounts, restaurants, menus, and orders.
2. **User Service**: Facilitates user registration, authentication, browsing restaurants, placing orders, and tracking deliveries.
3. **Restaurant Service**: Allows restaurant owners to manage their establishments, update menus, and track incoming orders.
4. **Delivery Service**: Manages delivery personnel, assigns delivery tasks, and provides tracking information to users.

Each microservice communicates with others through APIs, ensuring loose coupling and enabling independent development and deployment.

## Installation and Setup

To run the Food Delivery Web Application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd food-delivery-app`
3. Install dependencies: `npm install`
4. Set up environment variables and configurations for each microservice.
5. Build and run each microservice using Docker containers.
6. Access the application via the provided URL.

Detailed installation instructions for each microservice can be found in their respective directories.

=

