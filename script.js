

function addTileAttributes (){
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        //create a hover like effect by targeting when it enters
        tile.addEventListener("mouseenter", () => {
        tile.style.backgroundColor = generateRandomFillColor();
        });

    });
};
function initializeBoard () {
    let sketchContainer = document.querySelector(".container");
    //overrides the containers default settings
    sketchContainer.style.flexDirection = "column";
    
    let rows = []
    for (let i = 0; i < 16 ; i ++){
        if (i % 4 === 0){
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.display = "flex";
            sketchContainer.appendChild(row);
            rows.push(row);
        }
        
        let currentRow = rows[ Math.floor(i / 4) ];
        let newDiv = document.createElement("div");
        newDiv.classList.add("tile");
        //newDiv.textContent = (i+1); //for testing purposes
        currentRow.appendChild(newDiv);

        
        
    }
    addTileAttributes();
};
function generateRandomFillColor (){
    let randomColor = Math.floor(16777216 * Math.random());
    return "#" + randomColor.toString(16).padStart(6, "0");
};
function getTileSize() { //chatGPT'd
  const tempTile = document.createElement("div");
  tempTile.classList.add("tile");
  document.body.appendChild(tempTile);
  const computedStyle = window.getComputedStyle(tempTile);
  const width = parseFloat(computedStyle.width);
  const height = parseFloat(computedStyle.height);
  document.body.removeChild(tempTile);
  return { width, height };
};


function fillScreenWithTiles() {
    const sketchContainer = document.querySelector(".container");
    sketchContainer.innerHTML = ""; // Clear old tiles

    const { width: tileWidth, height: tileHeight } = getTileSize();
    const tilesPerRow = Math.floor(window.innerWidth / tileWidth);
    const tilesPerColumn = Math.floor(window.innerHeight / tileHeight);
    const totalTiles = tilesPerRow * tilesPerColumn;

  for (let i = 0; i < totalTiles; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    sketchContainer.appendChild(tile);
  }

  addTileAttributes();
}


window.addEventListener("resize", () => fillScreenWithTiles()); // Recalculate on resize
fillScreenWithTiles(); // Initial call

//delays the resize to reduce lag
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    fillScreenWithTiles();
  }, 100);
});