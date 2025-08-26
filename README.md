# Campaign Donation Platform

## Project Description
This project is a donation platform where users can donate to different campaigns, view campaign details, track donation progress, and see real-time updates as donations are made. The platform uses WebSockets to listen for new donations and dynamically update the campaign details.

## Technologies Used
- **Angular 17**: The core framework used for building the application.
- **ngx-toastr**: A library used to show notifications (success, error, warning).
- **Apollo Client**: Used to interact with the GraphQL API.
- **WebSocket**: Used for real-time updates of donations.
- **RxJS**: Used for handling asynchronous operations.
- **CSS (Flexbox & Grid)**: For responsive layouts and design.
- **TypeScript**
- **Custom Utilities**: Reusable CSS classes to simplify styling and avoid external libraries like Bootstrap.

## Custom CSS Utilities
In order to simplify styling and avoid using external libraries like Bootstrap, I created custom utility classes. These utilities follow the same naming convention as Bootstrap but are entirely built with pure CSS to make the project lightweight and customizable.

Some of the utilities include:

- **Flexbox Utilities**: Classes like `.d-flex-between` for aligning items using flexbox.
- **Grid Layouts**: A 4-column grid layout with the `.d-grid-4` class, which adjusts based on screen size.
- **Spacing Utilities**: Classes for margin and padding such as `.mt-2`, `.mb-5`, `.pt-4`, etc. These help easily manage the spacing across the project.
- **Responsive Design**: Grid layout adjustments for smaller screens, ensuring a responsive design.

These custom utilities were implemented to maintain flexibility and allow easier styling across components, without the need for Bootstrap or any external CSS framework.

## Reusable Components
The project utilizes several reusable Angular components, which promote code reusability and maintainability. These components are designed to be modular and reusable across multiple parts of the application, reducing redundancy and ensuring consistency.

### List of Reusable Components:
1. **Input Component (`app-input`)**:
   - A flexible input field component used for different forms throughout the project.
   - Supports dynamic `placeholder`, `type`, and `value` properties.
  
2. **Button Component (`app-primary-button`)**:
   - A reusable button component that supports different labels and styles (primary or secondary).
   - It emits an event on click, making it easy to bind actions like form submissions or navigation.

3. **Notified Section (`app-notify`)**:
   - A reusable section component for subscribing to campaign notifications.
   - Uses an input field and a button to allow users to get notifications when new campaigns are added.

4. **Navigation Bar (`app-nav`)**:
   - The navigation component that serves as the top bar of the application.
   - Includes links to home, campaign details, and other pages within the app.
  
5. **Footer Component (`app-footer`)**:
   - The footer that displays basic information like contact details, social media links, and other important information.

These components ensure that the application remains clean, organized, and maintainable. By using

## Installation Instructions

1. **Ensure Node.js Version 20.19.0**:
   - Make sure you have Node.js version **20.19.0** installed.

2. **Ensure Angular Version 17**:
   - The project is built using Angular 17. To check your Angular version, run:
     ng --version
   - If you don't have Angular 17, you can install it globally by running:
     npm install -g @angular/cli@17

3. **Install Dependencies**:
   - Once you're in the project directory, run the following command to install the project dependencies:
     npm install
   - This will install all the required packages and create the `node_modules` folder.

4. **Run the Application**:
   - To start the application, run the following command:
     ng serve 
   - This will start the development server and you can access the application at [http://localhost:4200]

