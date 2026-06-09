/* 
  ============================
  ELEMENT SELECTIONS
  ============================

  These constants connect JavaScript to elements from the HTML.
*/

const gridContainer = document.querySelector("#gridContainer");

const gridSizeSlider = document.querySelector("#gridSizeSlider");
const gridSizeText = document.querySelector("#gridSizeText");
const changeSizeButton = document.querySelector("#changeSizeButton");

const drawButton = document.querySelector("#drawButton");
const eraserButton = document.querySelector("#eraserButton");
const clearButton = document.querySelector("#clearButton");
const rainbowButton = document.querySelector("#rainbowButton");

const colorButtons = document.querySelectorAll(".color-button");
const customColorPicker = document.querySelector("#customColorPicker");

const activeToolIcon = document.querySelector("#activeToolIcon");
const activeToolText = document.querySelector("#activeToolText");
const activeColorPreview = document.querySelector("#activeColorPreview");
const activeColorText = document.querySelector("#activeColorText");

const gridLinesToggle = document.querySelector("#gridLinesToggle");

const currentYear = document.querySelector("#currentYear");


/* 
  ============================
  APPLICATION STATE
  ============================

  These variables remember the current status of the app.
*/

let currentGridSize = 16;
let currentColor = "#2E7D4F";
let currentColorName = "Bio-Leaf";

/*
  currentTool can be:
  - "draw"
  - "erase"
  - "rainbow"
*/
let currentTool = "draw";

/*
  This controls click-and-drag drawing.

  false = user is not holding the mouse button
  true = user is holding the mouse button
  changed mouse  to pointer to support touchscreens and tablets as well
*/
let isDrawing = false;


/* 
  ============================
  GRID CREATION
  ============================

  This function creates a new grid based on the selected size.
*/

function createGrid(size) {
  // Remove all old squares before creating a new grid
  gridContainer.innerHTML = "";

  // Update the app's current grid size
  currentGridSize = size;

  // Update the visible grid size text
  gridSizeText.textContent = `${size}x${size}`;

  /*
    Store the grid size as a CSS variable.
    CSS will use this number to calculate each square's size.
  */
  gridContainer.style.setProperty("--grid-size", size);

  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    square.classList.add("grid-square");

    square.addEventListener("pointerdown", function (event) {
      if (event.button === 0) {
        isDrawing = true;
        colorSquare(square);
      }
    });

    square.addEventListener("pointerenter", function () {
      if (isDrawing) {
        colorSquare(square);
      }
    });

    gridContainer.appendChild(square);
  }
}


/* 
  ============================
  DRAWING LOGIC
  ============================

  This function decides what happens when a square is colored.
*/

function colorSquare(square) {
  if (currentTool === "draw") {
    square.style.backgroundColor = currentColor;
  }

  if (currentTool === "erase") {
    square.style.backgroundColor = "white";
  }

  if (currentTool === "rainbow") {
    square.style.backgroundColor = getRandomRainbowColor();
  }
}


/* 
  Returns a random rainbow-like color.
  This keeps rainbow mode bright and playful.
*/

function getRandomRainbowColor() {
  const rainbowColors = [
    "#FF5F57",
    "#F2A154",
    "#E9C46A",
    "#65B96F",
    "#70A1B7",
    "#9B5DE5"
  ];

  const randomIndex = Math.floor(Math.random() * rainbowColors.length);

  return rainbowColors[randomIndex];
}


/* 
  ============================
  TOOL SELECTION
  ============================

  These functions update the active drawing mode.
*/

function setTool(tool) {
  currentTool = tool;

  // Remove active styling from all tool buttons first
  drawButton.classList.remove("active-button");
  eraserButton.classList.remove("active-button");
  rainbowButton.classList.remove("active-button");

  if (tool === "draw") {
    drawButton.classList.add("active-button");
    activeToolIcon.textContent = "🖌️";
    activeToolText.textContent = "Draw";
  }

  if (tool === "erase") {
    eraserButton.classList.add("active-button");
    activeToolIcon.textContent = "◼";
    activeToolText.textContent = "Eraser";
  }

  if (tool === "rainbow") {
    rainbowButton.classList.add("active-button");
    activeToolIcon.textContent = "🌈";
    activeToolText.textContent = "Rainbow";
  }
}


/* 
  ============================
  COLOR SELECTION
  ============================

  These functions update the current drawing color.
*/

function setColor(color, colorName) {
  currentColor = color;
  currentColorName = colorName;

  // When the user selects a color, return to draw mode automatically
  setTool("draw");

  // Update the active color display
  activeColorPreview.style.backgroundColor = color;
  activeColorPreview.style.boxShadow = `0 0 0 2px ${color}, 0 0 18px ${color}`;
  activeColorText.textContent = colorName;

  // Remove selected border from all preset color buttons
  colorButtons.forEach(function (button) {
    button.classList.remove("selected-color");
  });
}


/* 
  ============================
  CLEAR GRID
  ============================

  This removes the drawing without changing the grid size.
*/

function clearGrid() {
  const squares = document.querySelectorAll(".grid-square");

  squares.forEach(function (square) {
    square.style.backgroundColor = "white";
  });
}


/* 
  ============================
  EVENT LISTENERS
  ============================

  Event listeners make the app respond to user actions.
*/


/*
  Stop drawing when the user releases the mouse button anywhere on the page.
  This is better than listening only on the squares.
  Changed mouseup to pointerup to support touchscreens and tablets as well.
*/
document.addEventListener("pointerup", function () {
  isDrawing = false;
});


/*
  Prevents accidental dragging behavior while drawing.
  This makes the drawing interaction feel cleaner.
*/
gridContainer.addEventListener("dragstart", function (event) {
  event.preventDefault();
});


/*
  Update the visible grid size text while the user moves the slider.
  This does not rebuild the grid yet.
*/
gridSizeSlider.addEventListener("input", function () {
  const sliderValue = Number(gridSizeSlider.value);
  gridSizeText.textContent = `${sliderValue}x${sliderValue}`;
});


/*
  Rebuild the grid only when the user clicks Change Size.
  This prevents the app from constantly rebuilding the grid while sliding.
*/
changeSizeButton.addEventListener("click", function () {
  const newSize = Number(gridSizeSlider.value);
  createGrid(newSize);
});


drawButton.addEventListener("click", function () {
  setTool("draw");
});


eraserButton.addEventListener("click", function () {
  setTool("erase");
});


rainbowButton.addEventListener("click", function () {
  setTool("rainbow");
});


clearButton.addEventListener("click", function () {
  clearGrid();
});


/*
  Each preset color button stores its color in data-color
  and its readable name in data-name.
*/
colorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedColor = button.dataset.color;
    const selectedColorName = button.dataset.name;

    setColor(selectedColor, selectedColorName);

    // Add selected styling to the clicked button
    button.classList.add("selected-color");
  });
});


/*
  The custom color picker gives the user access to the full color spectrum.
*/
customColorPicker.addEventListener("input", function () {
  const selectedColor = customColorPicker.value;

  setColor(selectedColor, "Custom Color");
});


/*
  Turns the visible grid lines on or off.
*/
gridLinesToggle.addEventListener("change", function () {
  if (gridLinesToggle.checked) {
    gridContainer.classList.remove("grid-lines-off");
  } else {
    gridContainer.classList.add("grid-lines-off");
  }
});


/* 
  ============================
  KEYBOARD SHORTCUTS
  ============================

  These are optional but make the app feel more polished.
*/

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  if (key === "d") {
    setTool("draw");
  }

  if (key === "e") {
    setTool("erase");
  }

  if (key === "r") {
    setTool("rainbow");
  }

  /*
    Ctrl+C usually means copy.
    Here we use it to clear the drawing, matching the mockup hint.
    preventDefault stops the browser's normal copy behavior.
  */
  if (event.ctrlKey && key === "c") {
    event.preventDefault();
    clearGrid();
  }
});


/* 
  ============================
  INITIAL APP LOAD
  ============================

  These lines set up the app when the page first opens.
*/

createGrid(currentGridSize);
setTool("draw");
setColor(currentColor, currentColorName);

// Automatically displays the current year in the footer
currentYear.textContent = new Date().getFullYear();