# Jokes Service Frontend

This frontend application provides a user interface for interacting with the Jokes microservices. Built using **Next.js**, it allows users to submit jokes, view random jokes, and manage submissions through the moderation process.

## Overview

The Jokes Service Frontend communicates with three microservices:

1. **Deliver Jokes Microservice**: Provides approved jokes based on user-selected types.
2. **Moderate Jokes Microservice**: Enables moderators to approve, edit, or reject submitted jokes.
3. **Submit Jokes Microservice**: Allows users to submit new jokes without requiring authentication.

## Features

- **User-Friendly Interface**: Intuitive UI for users to submit jokes and view delivered jokes.
- **Joke Submission**: Users can submit jokes with selected types.
- **Moderation Capabilities**: Moderators can review and manage jokes.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: Scoped CSS for styling components.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RuzbihanZaleek/jokes-service-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd jokes-service-frontend
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```
7. Open your browser and navigate to http://localhost:3003 to view the application.
   
