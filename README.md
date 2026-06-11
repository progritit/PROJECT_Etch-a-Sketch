# Etch-a-Sketch Studio

[Live Demo](https://progritit.github.io/PROJECT_Etch-a-Sketch/)

<img width="1919" height="933" alt="Etch-a-Sketch Studio preview" src="https://github.com/user-attachments/assets/bc009ae0-79a9-40d1-bd25-66f42f24e0ba" />

A browser-based Etch-a-Sketch / pixel drawing application built with HTML, CSS, and JavaScript.

This project was developed as part of **The Odin Project Foundations** curriculum and expanded into a polished browser drawing app focused on DOM manipulation, event handling, dynamic grid creation, Flexbox layout, interactive controls, and beginner-friendly JavaScript logic.

---

## Preview

The application showcases:

* A modern Etch-a-Sketch inspired drawing interface
* A bright eco-futuristic visual direction
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
* Video background integration
* Git and GitHub
* GitHub Pages

---

## Features

### Layout & UI

* Semantic HTML structure
* Application-style drawing interface
* Left-side control panel
* Main drawing canvas panel
* Styled buttons and interactive controls
* Active tool display
* Active color preview
* Footer with GitHub profile link
* Responsive page layout
* Animated background video with static image fallback

### Drawing Logic

* Grid squares created dynamically with JavaScript
* Default 16x16 grid on page load
* User-selected grid sizes through a slider
* Click-and-hold drawing instead of automatic hover drawing
* Drawing only activates while the left mouse button is held
* Eraser mode paints pixels back to the canvas color
* Clear button resets the full drawing area
* Rainbow mode applies random bright colors while drawing

### Color Controls

* Preset color palette for quick drawing
* Custom color picker for broader color selection
* Active color preview updates dynamically
* Selecting a color automatically returns the user to draw mode

### Design

* Bright eco-futuristic visual identity
* Warm greens, golds, creams, and natural tones
* Animated background with slow environmental movement
* Soft shadows, rounded panels, and glowing accents
* Interface designed to remain readable over a detailed background
* Visual style inspired by creative studio environments and optimistic future design

---

## Project Structure

```plaintext
PROJECT_Etch-a-Sketch/
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

This version of the project was redesigned as a fictional drawing application named **Etch-a-Sketch Studio**.

The objective was to transform a foundational DOM manipulation exercise into a more polished portfolio project: a simple browser-based sketch pad with a more immersive interface, interactive controls, and a distinctive visual identity.

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
* Writing clearer comments to explain code purpose
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

```js
new Date().getFullYear();
```

* Updated the footer dynamically when the page loads

---

## Development Workflow

This project was built through a hands-on learning process using HTML, CSS, and JavaScript.

AI tools were used as learning and productivity assistants for brainstorming, visual direction, debugging support, and documentation refinement. The final code was reviewed, adapted, tested, and integrated manually, with a focus on understanding the JavaScript logic, DOM interactions, grid behavior, layout structure, and design decisions behind the implementation.

This workflow reflects a modern approach to learning web development: using available tools strategically while staying responsible for the final result.

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

---

## Author

**Clebson Costa**

Full Stack Web Development student.

Current areas of study and practice:

* HTML
* CSS
* JavaScript fundamentals
* DOM manipulation
* Responsive layouts
* Git and GitHub
* Clean UI implementation
* Portfolio-quality projects

Long-term learning path:

* Frontend development
* Backend development
* Databases
* Full stack application architecture

---

## Acknowledgements

* The Odin Project
* ChatGPT for learning support, debugging assistance, and documentation refinement
* Google Gemini for visual direction exploration
* The open web development community

---

## License

This project is open-source and available for educational and portfolio purposes.
