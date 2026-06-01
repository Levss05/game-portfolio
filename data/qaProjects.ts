export const qaProjects = [
  {
    title: "Exploratory Testing Study - Snake Game",
    type: "QA Game Testing",
    description:
      "An exploratory testing study focused on validating gameplay behavior, input handling, overlays, scoring, win/loss conditions, and responsiveness in the Snake Game.",
    tools: [
      "Exploratory Testing",
      "Gameplay Testing",
      "Input Testing",
      "Responsive Testing",
      "Bug Reports",
      "Evidence Review",
    ],
    status: "In Progress",
    goal:
      "Evaluate the Snake Game from a QA perspective by testing keyboard controls on desktop, swipe controls on mobile, start/restart flow, collision behavior, scoring, and overlay visibility.",
    learning:
      "Improved my ability to identify UI state issues, input problems, mobile responsiveness defects, and gameplay flow inconsistencies.",
    testEnvironment: [
      "Desktop browser using Google Chrome.",
      "Mobile viewport using browser DevTools.",
      "Keyboard input on desktop.",
      "Touch swipe input on mobile.",
      "Game embedded inside the portfolio through an iframe.",
    ],
    testScenarios: [
      "Start game flow.",
      "Restart after game over.",
      "Victory condition validation.",
      "Wall collision.",
      "Self-collision.",
      "Food spawning.",
      "Score and high score update.",
      "Mobile swipe controls.",
      "Overlay visibility for start, game over, and victory screens.",
    ],
    bugsFound: [
      "Start, game over, and victory overlays were displayed at the same time.",
      "Mobile controls needed to be changed from on-screen buttons to swipe gestures.",
      "The embedded game layout caused unwanted page scrolling in some viewport sizes.",
    ],
    suggestions: [
      "Keep only one overlay visible per game state.",
      "Use keyboard controls on desktop and swipe gestures on mobile.",
      "Adjust iframe height responsively for different screen sizes.",
      "Keep restart behavior consistent after game over and victory states.",
    ],
    conclusion:
      "The Snake Game became more stable after fixing overlay visibility, improving mobile input behavior, and adjusting layout responsiveness. This study helped practice gameplay testing, UI state validation, and mobile QA.",
  },

  {
    title: "Mobile Input Testing - Snake Game",
    type: "Input / Mobile QA Testing",
    description:
      "A focused QA study created to validate mobile input behavior after replacing on-screen directional buttons with swipe gestures.",
    tools: [
      "Mobile Testing",
      "Touch Input Testing",
      "Gesture Testing",
      "Responsive Testing",
      "Manual QA",
    ],
    status: "Completed",
    goal:
      "Validate whether swipe gestures provide a better mobile gameplay experience than on-screen directional buttons.",
    learning:
      "Learned how different input methods affect gameplay usability and how mobile controls need to be tested separately from desktop keyboard controls.",
    testEnvironment: [
      "Mobile viewport using Chrome DevTools.",
      "Touch simulation in responsive mode.",
      "Snake Game running inside the portfolio game page.",
    ],
    testScenarios: [
      "Swipe up to move the snake upward.",
      "Swipe down to move the snake downward.",
      "Swipe left to move the snake left.",
      "Swipe right to move the snake right.",
      "Start the game using a swipe gesture.",
      "Verify that accidental short touches do not trigger movement.",
      "Verify that desktop keyboard controls still work on PC.",
    ],
    bugsFound: [
      "Initial mobile control implementation using buttons was not ideal for the gameplay experience.",
      "The game needed a clearer separation between desktop keyboard controls and mobile touch controls.",
    ],
    suggestions: [
      "Use keyboard arrows only for desktop.",
      "Use swipe gestures for mobile gameplay.",
      "Keep the start screen instructions different for desktop and mobile.",
      "Define a minimum swipe distance to avoid accidental movement.",
    ],
    conclusion:
      "Swipe-based controls created a cleaner mobile experience and reduced visual clutter compared to on-screen buttons. This test improved the game's usability on mobile devices.",
  },

  {
    title: "Exploratory Testing Study - Mario Jump",
    type: "QA Game Testing",
    description:
      "A gameplay testing study focused on jump mechanics, collision detection, mobile touch behavior, restart flow, character scaling, and obstacle balance.",
    tools: [
      "Gameplay Testing",
      "Collision Testing",
      "Mobile Testing",
      "Input Testing",
      "Bug Reports",
      "Game Balance Review",
    ],
    status: "In Progress",
    goal:
      "Test the Mario Jump prototype across desktop and mobile to validate jump behavior, slow-fall mechanics, pipe collision, restart behavior, and screen scaling.",
    learning:
      "Developed a better understanding of how input handling, physics values, character size, and collision thresholds affect the player experience.",
    testEnvironment: [
      "Desktop browser using Google Chrome.",
      "Mobile viewport using browser DevTools.",
      "Keyboard input on desktop.",
      "Touch input on mobile.",
      "Game embedded inside the portfolio through an iframe.",
    ],
    testScenarios: [
      "Start game flow.",
      "Jump using keyboard input.",
      "Jump using touch input.",
      "Hold input to slow down the fall.",
      "Pipe collision behavior.",
      "Restart after game over.",
      "Victory condition validation.",
      "Character scaling on mobile.",
      "Obstacle size and balance on mobile.",
    ],
    bugsFound: [
      "The restart button did not work correctly on mobile.",
      "The Mario character scaled incorrectly after starting the game on mobile.",
      "The pipe appeared too large on mobile screens.",
      "The original jump height and timing were not enough to pass the pipe consistently.",
    ],
    suggestions: [
      "Use pointer events for restart buttons on mobile.",
      "Create device-specific character sizing logic.",
      "Adjust pipe size and collision thresholds for mobile.",
      "Replace fixed jump animation with JavaScript-based jump physics.",
      "Allow holding the jump input to slow down the character's fall.",
    ],
    conclusion:
      "Mario Jump improved significantly after adjusting mobile input, character scaling, pipe size, collision thresholds, and jump physics. This study helped practice gameplay balance testing and mobile QA validation.",
  },

  {
    title: "Restart Flow Testing - Mario Jump",
    type: "Functional QA Testing",
    description:
      "A focused functional test study created to validate the game restart flow after game over and victory states, especially on mobile devices.",
    tools: [
      "Functional Testing",
      "Mobile Testing",
      "Regression Testing",
      "State Testing",
      "Manual QA",
    ],
    status: "Completed",
    goal:
      "Ensure that the restart button correctly resets the game state and starts a new attempt on both desktop and mobile.",
    learning:
      "Learned how duplicated event listeners and global touch handlers can break button behavior on mobile devices.",
    testEnvironment: [
      "Desktop browser using Google Chrome.",
      "Mobile viewport using Chrome DevTools.",
      "Touch input simulation.",
      "Game over and victory screens.",
    ],
    testScenarios: [
      "Lose the game by colliding with the pipe.",
      "Tap the restart button on the game over screen.",
      "Verify that the game restarts immediately.",
      "Reach the victory condition.",
      "Tap the restart button on the victory screen.",
      "Verify that the score, pipe position, character state, and overlays reset correctly.",
    ],
    bugsFound: [
      "The restart button did not work on mobile because global touch events were interfering with button events.",
      "Restart behavior was inconsistent because multiple event listeners were attached to the same buttons.",
    ],
    suggestions: [
      "Avoid duplicated event listeners for the same action.",
      "Use pointerdown for mobile-friendly button interactions.",
      "Ignore restart buttons inside global touchstart handlers.",
      "Reset the game state before calling the start game function again.",
    ],
    conclusion:
      "After cleaning duplicated listeners and using pointer events, the restart flow became more reliable on mobile and desktop.",
  },

  {
    title: "Responsive Layout Testing - Portfolio Game Pages",
    type: "Responsive / UX QA Testing",
    description:
      "A QA study focused on validating how playable games behave when embedded inside portfolio pages across desktop and mobile viewports.",
    tools: [
      "Responsive Testing",
      "Iframe Testing",
      "UX Review",
      "Mobile Testing",
      "Layout Validation",
    ],
    status: "In Progress",
    goal:
      "Evaluate whether the game pages fit properly inside the portfolio layout without unwanted scrolling, broken controls, or poor mobile usability.",
    learning:
      "Improved my ability to identify layout issues caused by iframe sizing, fixed viewport values, and mobile scaling differences.",
    testEnvironment: [
      "Desktop browser using Google Chrome.",
      "Mobile viewport using Chrome DevTools.",
      "Game pages embedded through iframes.",
      "Different viewport widths and heights.",
    ],
    testScenarios: [
      "Open each game page on desktop.",
      "Open each game page on mobile viewport.",
      "Verify if the iframe fits the available screen space.",
      "Check if the game creates unwanted vertical or horizontal scrolling.",
      "Verify if the back button and page header remain accessible.",
      "Test if touch controls still work inside the iframe.",
    ],
    bugsFound: [
      "Some game iframes created unwanted page scrolling on mobile.",
      "Some games used desktop-sized layouts when opened on mobile.",
      "The game area sometimes exceeded the visible viewport.",
    ],
    suggestions: [
      "Use responsive iframe heights for mobile and desktop.",
      "Avoid fixed desktop-only dimensions inside game CSS.",
      "Use mobile-specific CSS rules for character and obstacle sizes.",
      "Test playable games on real mobile devices when possible.",
    ],
    conclusion:
      "The portfolio game pages became more usable after adjusting iframe sizes, game layout dimensions, and mobile-specific styling.",
  },

  {
    title: "Exploratory Testing Study - Tetris",
    type: "QA Game Testing",
    description:
      "A testing study focused on piece movement, rotation, line clearing, scoring, game over state, victory condition, and mobile control limitations.",
    tools: [
      "Puzzle Game Testing",
      "Keyboard Input Testing",
      "Canvas Testing",
      "Rules Validation",
      "UI Testing",
      "QA Documentation",
    ],
    status: "Planned",
    goal:
      "Validate core Tetris mechanics such as movement, rotation, hard drop, line clearing, score progression, game over behavior, and mobile usability.",
    learning:
      "Practice testing grid-based game logic, state management, input responsiveness, and classic puzzle game rules.",
    testEnvironment: [
      "Desktop browser using Google Chrome.",
      "Game rendered with p5.js canvas.",
      "Keyboard input for desktop controls.",
      "Mobile viewport using browser DevTools.",
    ],
    testScenarios: [
      "Move pieces left and right.",
      "Rotate each piece type.",
      "Move pieces down faster.",
      "Use hard drop.",
      "Complete a horizontal line.",
      "Validate line clearing behavior.",
      "Validate score or line counter updates.",
      "Trigger game over by stacking pieces to the top.",
      "Validate victory condition after completing the required number of lines.",
      "Review mobile control limitations.",
    ],
    bugsFound: [
      "Mobile playability may be limited because the original controls depend on keyboard input.",
      "Further testing is needed to validate touch controls or on-screen buttons.",
    ],
    suggestions: [
      "Add on-screen mobile controls for movement, rotation, down movement, and hard drop.",
      "Validate each tetrimino rotation near walls and stacked pieces.",
      "Test line clearing with one, two, three, and four lines.",
      "Confirm that game over and victory overlays do not conflict.",
    ],
    conclusion:
      "This study is planned to validate Tetris mechanics more deeply, especially around grid logic, piece rotation, and mobile usability.",
  },
];