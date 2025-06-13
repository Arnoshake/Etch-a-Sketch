

function addEventListeners (){
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        //create a hover like effect by targeting when it enters
        tile.addEventListener("mouseenter", () => {
        tile.style.backgroundColor = "green";
        });

    });
};
function initializeBoard () {
    let sketchContainer = document.querySelector(".container");
    sketchContainer.style.display = "flex";
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
    addEventListeners();
};



initializeBoard();