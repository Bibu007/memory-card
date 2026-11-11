# Memory Card

<p align="center">
  <a href="YOUR_LIVE_DEMO_URL">
    <img src="https://img.shields.io/badge/✓%20VISIT%20NOW-22C55E?style=for-the-badge&labelColor=14532D" alt="Visit Now" />
  </a>
</p>

## About

A Memory Card game built as part of [The Odin Project](https://www.theodinproject.com/).

The objective of the game is to test and improve your memory by selecting cards without choosing the same card more than once.

This project focuses on building an interactive React application while exploring state management, component lifecycle, API integration, and handling asynchronous operations.

<img width="1470" height="775" alt="Screenshot 2026-10-02 at 3 10 42 PM" src="https://github.com/user-attachments/assets/c3346db1-6091-4c46-ae6a-f1c8ff292acc" />


## Features

- Interactive card-based gameplay
- Randomized card arrangement
- Track selected cards to avoid repeated selections
- Score tracking
- Keep track of the highest score
- Dynamic UI updates based on user interactions
- Responsive user interface
- Fetch and display dynamic card content

## Technologies Used

- JavaScript (ES6+)
- React
- React Hooks
- HTML5
- CSS3
- Vite
- ESLint

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bibu007/memory-card.git
   ```

2. Navigate to the project directory:

   ```bash
   cd memory-card
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Build for Production

To create an optimized production build, run:

```bash
npm run build
```

## What I Learned

While building this project, I gained experience with:

- Building reusable components using React.
- Managing application state using React hooks.
- Using `useEffect` to handle side effects and API requests.
- Fetching data from external APIs.
- Handling asynchronous operations and loading states.
- Implementing game logic using JavaScript.
- Managing arrays and objects when tracking selected cards.
- Implementing randomized card arrangements.
- Understanding how React re-renders components when state changes.
- Separating application logic into reusable components.
- Managing component state and passing data through props.
- Designing an interactive and responsive user interface.

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for the project inspiration and learning resources.



Self note:

1. Never assign a component to a state variable. This will lead error that'll be difficult to trace.
2. Observe setClickedList() in App.jsx. Here prevState is passed by js by default. Use this when you want previous state when modifying state.
3. Always think in terms of components and data flowing between components. React is made of components not functions.
4. Follow the best practices. Remember the points from 'You might not need Effect' and 'Choosinf the state structure lesson'. Refer notes for summary. Eg: Notifying parent about state change -> solution is to lift the state up.
