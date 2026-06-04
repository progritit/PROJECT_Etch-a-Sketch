# Etch-a-Sketch Project
<img width="1919" height="933" alt="Screenshot_2026-06-04_23-23-45" src="https://github.com/user-attachments/assets/bc009ae0-79a9-40d1-bd25-66f42f24e0ba" />

# ETCH-A-SKETCH STUDIO

A solarpunk-themed Etch-a-Sketch / pixel drawing application built with HTML, CSS, and JavaScript.

This project was developed as part of The Odin Project Foundations curriculum and expanded into a visually polished browser drawing app focused on DOM manipulation, event handling, Flexbox layout, dynamic grid creation, and beginner-friendly JavaScript logic.

---

## Preview

The application showcases:

* A modern Etch-a-Sketch inspired drawing interface
* A solarpunk visual theme
* Dynamically generated grid squares using JavaScript
* Click-and-hold drawing behavior
* Preset color selection
* Custom color picker
* Rainbow drawing mode
* Eraser mode
* Clear canvas functionality
* Grid line toggle
* Grid size slider
* Active tool and active color indicators
* Animated video background
* Footer with automatically updated copyright year
* Responsive layout improvements

---

## Built With

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS variables
* DOM manipulation
* Event listeners
* VS Code
* Git and GitHub
* AI-generated visual assets

---

## Features

### Layout & UI

* Semantic HTML structure
* Solarpunk-inspired application interface
* Left-side control panel
* Main drawing canvas panel
* Styled buttons and interactive controls
* Active tool display
* Active color preview
* Footer with GitHub profile link
* Responsive page layout
* Animated background video with static image fallback

### Drawing Logic

* Grid squares are created dynamically with JavaScript
* Default 16x16 grid on page load
* User-selected grid sizes through a slider
* Click-and-hold drawing instead of automatic hover drawing
* Drawing only activates while the left mouse button is held
* Eraser mode paints pixels back to the canvas color
* Clear button resets the full drawing area
* Rainbow mode applies random bright colors while drawing

### Color Controls

* Reduced preset color palette for quick drawing
* Custom color picker for broad color selection
* Active color preview updates dynamically
* Selecting a color automatically returns the user to draw mode

### Design

* Solarpunk visual direction
* Warm greens, golds, creams, and natural tones
* Animated background with slow environmental movement
* Soft shadows, rounded panels, and glowing accents
* Interface designed to remain readable over a detailed background
* Visual style inspired by eco-futuristic creative studio environments

---

## Project Structure

```
PROJECT_Etch_A_Sketch/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── media/
    ├── background.png
    └── background.mp4
```

---

## Design Concept

This version of the project was redesigned as a fictional solarpunk drawing app named Solar Sketch Studio.

The objective was to create a simple browser-based sketch pad while making the interface feel more polished and portfolio-ready. The visual direction combines a creative drawing workspace with an optimistic eco-futuristic atmosphere.

The design is inspired by:

* Rooftop gardens
* Solar energy
* Green futuristic cities
* Warm natural light
* Creative studio environments
* Soft organic UI styling
* Pixel-based drawing tools

The goal was not to build an advanced drawing engine, but to create a visually engaging project using foundational HTML, CSS, and JavaScript skills.

---

## Key Learning Outcomes

This project helped reinforce:

* Creating HTML elements dynamically with JavaScript
* DOM selection and manipulation
* Event listeners for mouse interactions
* Managing application state with variables
* Using Flexbox to create a grid layout
* Calculating square sizes dynamically
* Handling user input from buttons, sliders, and color pickers
* Updating UI elements based on user actions
* Preventing unwanted browser drag behavior while drawing
* Organizing project assets with relative paths
* Using video as a background element
* Writing cleaner comments to explain code purpose
* Thinking about debugging and test-driven development

---

## Challenges Solved

### Creating the Grid with JavaScript

The project required the grid squares to be created dynamically rather than manually written in HTML.

### Solution

* Created a reusable grid creation function
* Used a loop to generate the correct number of square divs
* Inserted each square into a container element
* Calculated square dimensions based on the selected grid size

---

### Drawing Only While Holding the Mouse Button

The first version colored squares automatically when the cursor passed over them.

### Solution

* Added an `isDrawing` variable to track whether the mouse button is pressed
* Used `mousedown` to start drawing
* Used `mouseenter` to continue drawing only while the mouse is held
* Used `mouseup` on the document to stop drawing anywhere on the page

---

### Grid Sizing and Wrapping Issues

Some grid sizes caused unexpected visual behavior where the grid did not appear to show all squares correctly.

### Solution

* Investigated Flexbox wrapping behavior
* Confirmed that `flex-wrap: wrap` is necessary for the grid layout
* Checked how square sizes are calculated
* Considered safer sizing using the grid container’s available dimensions
* Used browser developer tools and console logging to inspect layout behavior

---

### Animated Background Integration

The original background was a static image, but the project later evolved to include a subtle animated background.

### Solution

* Added a `<video>` element behind the application
* Used `autoplay`, `muted`, `loop`, and `playsinline`
* Used the static image as a poster fallback
* Positioned the video with CSS so it behaves like a full-page background
* Adjusted playback speed with JavaScript for a calmer effect

---

### Automatic Copyright Year

The footer needed to show the current year automatically.

### Solution

* Added a footer with a dedicated year span

* Used JavaScript to get the current year:

  new Date().getFullYear();

* Updated the footer dynamically when the page loads

---

## AI-Assisted Workflow

This project was developed using a modern AI-assisted workflow.

### Tools Used

#### ChatGPT

Assisted with:

* Project structure planning
* HTML, CSS, and JavaScript implementation
* Feature-by-feature development
* Code comments and explanations
* Debugging layout and grid behavior
* Git commit message planning
* README drafting
* Portfolio presentation refinement

#### Google Gemini

Assisted with:

* Solarpunk interface mockup generation
* Background image generation
* Animated background video generation
* Visual direction exploration

#### VS Code

Used for:

* Writing and editing project files
* Organizing HTML, CSS, JavaScript, and media assets
* Testing changes locally
* Managing the project workflow

### Development Approach

AI tools were used as collaborative assistants throughout the project, while implementation decisions, debugging, code integration, testing, and final design choices were handled manually.

This workflow reflects a modern learning process where AI helps accelerate ideation and problem-solving, while the developer remains responsible for understanding, adapting, and applying the code.

---

## Future Improvements

Potential future enhancements:

* Add test coverage with Vitest and jsdom
* Add stronger input validation for grid sizes
* Add keyboard shortcuts for all major tools
* Add a save/download drawing feature
* Add a darken/lighten drawing mode
* Add improved mobile controls
* Add accessibility improvements
* Optimize background video size
* Add a custom favicon
* Deploy with GitHub Pages

---

## Author

Clebson Costa

Full Stack Web Development student.

Current areas of study and practice:

- HTML
- CSS
- JavaScript fundamentals
- DOM manipulation
- Responsive layouts
- Git and GitHub
- Clean UI implementation
- Portfolio-quality projects

Long-term learning path:

- Frontend development
- Backend development
- Databases
- Full stack application architecture

---

## Acknowledgements

* The Odin Project
* ChatGPT for development support and debugging assistance
* Google Gemini for solarpunk visual generation and creative inspiration
* The open web development community

---

## License

This project is open-source and available for educational and portfolio purposes.
