# 🎮 Tic-Tac-Toe Game

<div align="center">

![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-3.0-orange?style=for-the-badge&logo=css3)

A modern, interactive Tic-Tac-Toe game built with React featuring stunning animations, glass morphism design, and enhanced user experience.

[🚀 Live Demo](#) • [📖 Documentation](#-key-features-explained) • [🎯 How to Play](#-how-to-play)

</div>

---

## ✨ Features

### 🎯 Core Gameplay
- **Interactive 3x3 Grid**: Classic Tic-Tac-Toe with modern UI
- **Real-time Turn System**: Automatic switching between X and O players
- **Win Detection**: Instant recognition of 8 possible winning patterns
- **Draw Detection**: Smart detection when game ends in a tie
- **Move History**: Complete log of all game moves with timestamps

### 🎨 Visual Enhancements
- **Animated Background**: Dynamic gradient shifts with floating light effects
- **Glass Morphism Design**: Modern frosted glass containers with blur effects
- **Golden Yellow Theme**: Attractive gradient boxes with shimmer animations
- **Player Customization**: Edit player names with intuitive interface
- **Active Player Highlighting**: Glowing borders and animations for current player

### 🏆 Game Over Experience
- **Cinematic Game Over Screen**: Stunning animations with rotating effects
- **Winner Celebration**: Glowing text and particle effects for winners
- **Draw Recognition**: Elegant display when game ends in a tie
- **One-Click Restart**: Beautiful "Rematch!" button with hover effects

---

## 🖼️ Game Screenshots

### 🎮 Main Game Interface
![Main Game Interface](public/output/output%201.png)
*Clean, modern interface with animated background and golden game board*

### 👥 Player Customization
![Player Customization](public/output/output%202.png)
*Edit player names with intuitive interface and active player highlighting*

### 🏆 Winner Screen
![Winner Screen](public/output/output%203.png)
*Cinematic game over screen with glowing animations and celebration effects*

### 🤝 Draw Screen
![Draw Screen](public/output/output%204.png)
*Elegant draw recognition with beautiful animations and restart option*

---

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ofsaksham/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🎯 How to Play

### Getting Started
1. **Customize Players** - Click "Edit" next to player names to personalize them
2. **Begin Game** - Player X (Player 1) starts automatically
3. **Take Turns** - Click any empty square to place your symbol
4. **Win Conditions** - Get three symbols in a row (horizontal, vertical, or diagonal)
5. **Game End** - Win, lose, or draw - all scenarios are beautifully handled
6. **Restart** - Click "Rematch!" for a new game

### Winning Strategies
- **Control the Center** - The center square is the most valuable position
- **Create Forks** - Set up multiple winning opportunities
- **Block Opponent** - Prevent your opponent from creating winning combinations
- **Think Ahead** - Plan 2-3 moves in advance

---

## 🏗️ Project Architecture

```
src/
├── components/
│   ├── GameBoard.jsx      # 3x3 grid with interactive squares
│   ├── Player.jsx         # Player info with name editing
│   ├── GameOver.jsx       # Cinematic game over modal
│   └── Log.jsx            # Move history with timestamps
├── App.jsx                # Main app with game logic
├── winning-combinations.js # 8 winning pattern definitions
├── index.jsx              # React app entry point
└── index.css              # Stunning animations & styles
```

---

## 🎨 Key Features Explained

### 🧠 State Management
```javascript
// Smart state management with React hooks
const [gameTurns, setGameTurns] = useState([]);
const activePlayer = deriveActivePlayer(gameTurns);
```

### 🎭 Component Architecture
- **App.jsx**: Central game logic and state management
- **GameBoard.jsx**: Interactive 3x3 grid with hover effects
- **Player.jsx**: Player display with name editing capabilities
- **GameOver.jsx**: Stunning animated game over screen
- **Log.jsx**: Chronological move history with highlights

### 🎮 Game Logic
- **Turn Management**: Automatic X/O switching based on game history
- **Win Detection**: Real-time checking of 8 winning combinations
- **Draw Logic**: Smart detection when all squares are filled
- **Move Tracking**: Complete history for game replay

### ✨ Animation System
- **Background Animations**: Dynamic gradients with floating effects
- **Hover Effects**: Smooth transitions and scaling on interactions
- **Game Over Animations**: Cinematic entrance with rotating elements
- **Text Animations**: Glowing effects and pulsing highlights

---

## 🛠️ Available Scripts

| Command         | Description                            |
|----------------|----------------------------------------|
| `npm run dev`  | Start development server with hot reload |
| `npm run build`| Build optimized production version     |
| `npm run preview` | Preview production build locally    |
| `npm run lint` | Run ESLint for code quality checks     |

---

## 🎯 Learning Objectives

This project demonstrates essential React concepts:

### React Fundamentals
- ✅ Component composition and props
- ✅ State management with useState hook
- ✅ Event handling and user interactions
- ✅ Conditional rendering and dynamic content

### Modern JavaScript
- ✅ ES6+ features (destructuring, arrow functions)
- ✅ Array manipulation and iteration
- ✅ Object destructuring and spread operators

### CSS & Styling
- ✅ Advanced CSS animations and transitions
- ✅ Glass morphism design patterns
- ✅ Responsive design principles
- ✅ Modern CSS features (backdrop-filter, gradients)

---

## 🚀 Future Enhancements

### Planned Features
- [ ] **AI Opponent** - Smart computer player with difficulty levels
- [ ] **Score Tracking** - Persistent scores across multiple games
- [ ] **Sound Effects** - Immersive audio feedback
- [ ] **Local Storage** - Save game state and preferences
- [ ] **Multiplayer** - Real-time online multiplayer support
- [ ] **Custom Themes** - Multiple color schemes and themes

### Technical Improvements
- [ ] **TypeScript** - Add type safety and better development experience
- [ ] **Testing** - Unit tests and integration tests
- [ ] **PWA** - Progressive Web App capabilities
- [ ] **Performance** - Optimize animations and bundle size

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
1. Check existing issues first
2. Create a detailed bug report with steps to reproduce
3. Include screenshots or videos if possible

### 💡 Feature Requests
1. Describe the feature in detail
2. Explain the benefits and use cases
3. Consider implementation complexity

### 🔧 Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes with proper documentation
4. Submit a pull request with detailed description

---

<div align="center">

**🎮 Ready to play? Start the game now!**

[⬆️ Back to Top](#-tic-tac-toe-game)

</div>
