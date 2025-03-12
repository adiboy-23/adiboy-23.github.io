# Portfolio Website

A modern, interactive portfolio website featuring a unique 3D room transition experience with dark and light modes. Built with React, Three.js, and GSAP animations.

## Features

- **Interactive 3D Environment**
  - Seamless transitions between dark and light room modes
  - Responsive 3D models with smooth animations
  - Interactive grid planes with hover effects

- **Modern UI Components**
  - Clean and minimalist design
  - Smooth page transitions
  - Responsive navigation menu
  - Dynamic logo with theme-based styling

- **Responsive Design**
  - Mobile-friendly layout
  - Adaptive UI elements
  - Touch-enabled interactions

## Tech Stack

- **Frontend Framework**
  - React
  - Vite (Build tool)

- **3D Graphics**
  - Three.js
  - React Three Fiber
  - React Three Drei

- **Animations**
  - GSAP (GreenSock Animation Platform)
  - Custom transition components

- **Styling**
  - SCSS modules
  - CSS-in-JS

- **State Management**
  - Custom stores for room toggle, page transitions, and responsive design

## Project Structure

```
src/
├── Experience/           # 3D scene components and models
├── components/           # Reusable UI components
├── pages/               # Page components and layouts
├── routes/              # Routing configuration
├── stores/              # State management
├── styles/              # Global styles and variables
└── App.jsx             # Root component
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/adiboy-23/Portfolio-threejs.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## Key Components

### Experience
Manages the 3D scene, camera controls, and room transitions. Handles user interactions and animations for the 3D environment.

### Scene
Contains the 3D models, lighting, and grid planes. Manages the positioning and rotation of room elements.

### Page Transitions
Implements smooth transitions between pages using GSAP animations and React Transition Group.

### Room Toggle
Handles the switching between dark and light room modes, including camera movements and material updates.

## Development

### File Structure

- `Experience/`: Contains all 3D-related components and logic
  - `Scene.jsx`: Main 3D scene setup
  - `models/`: 3D model components for both dark and light rooms
  - `components/`: Reusable 3D components like GridPlanes

- `components/`: UI components
  - `Logo/`: Site logo with theme support
  - `Menu/`: Navigation menu
  - `Overlay/`: Transition overlay
  - `Buttons/`: Interactive buttons including room toggle

- `stores/`: State management
  - `toggleRoomStore.js`: Dark/light room state
  - `pageTransitionStore.js`: Page transition states
  - `experienceStore.js`: 3D experience states
  - `useResponsiveStore.js`: Responsive design states

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Credits

- [Image by Marc Mueller](https://www.pexels.com/photo/man-sitting-in-front-of-computer-380769/)
- [Image by Daniel McCullough](https://unsplash.com/photos/person-drafting-on-blueprint--FPFq_trr2Y)
- [Image by R ARCHITECTURE](https://unsplash.com/photos/black-wooden-table-and-chairs-wDDfbanbhl8)
- [Blender Asset Pack Affliate Link](https://blendermarket.com/products/interior-models?ref=603)