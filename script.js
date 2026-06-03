// Select the grid container from the HTML
const container = document.querySelector("#container");

// Select the button that lets the user change the grid size
const resizeButton = document.querySelector("#resizeButton");

/*
 * Creates a new square grid inside the container.
 *
 * @param {number} squaresPerSide - The number of squares for each row and column.
 * Example: 16 creates a 16x16 grid.
 */
function createGrid(squaresPerSide) {
  // Remove any existing squares before creating a new grid
  container.innerHTML = "";

  /*
    Use the container's inner width so the grid fits inside the border.
    clientWidth excludes the outer border, which helps prevent overflow.
  */
  const containerWidth = container.clientWidth;

  // Calculate the size of each square so the grid always fits the same space
  const squareSize = containerWidth / squaresPerSide;

  // Calculate the total number of squares needed
  const totalSquares = squaresPerSide * squaresPerSide;

  // Create each square and add it to the container
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    // Add the CSS class that gives the square its default styling
    square.classList.add("grid-square");

    // Set the square's size dynamically based on the requested grid size
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    /*
      Add the drawing behavior.
      When the mouse enters a square, the square receives the "colored" class.
    */
    square.addEventListener("mouseenter", function () {
      square.classList.add("colored");
    });

    // Place the square inside the grid container
    container.appendChild(square);
  }
}

/*
  When the button is clicked, ask the user for a new grid size.
  Then rebuild the grid using that size.
*/
resizeButton.addEventListener("click", function () {
  const userInput = prompt("Enter the number of squares per side. Maximum is 100.");

  // Convert the prompt result from text into a number
  const newSize = Number(userInput);

  /*
    Only allow grid sizes from 1 to 100.
    This prevents very large grids that could slow down or crash the browser.
  */
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Create the default 16x16 grid when the page first loads
createGrid(16);