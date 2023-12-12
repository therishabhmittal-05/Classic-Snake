// Defining HTML Elements
const board = document.getElementById("game-board")

// game Variables
let gridSize = 20;
let snake = [{x:10,y:10}]
let food = generateFood()

//drawing board map, snake, food
function draw(){
    board.innerHTML = "";
    drawSnake();
    drawFood();
}

//snake
function drawSnake(){
   snake.forEach((segmemt)=>{
    const snakeElement = createGameElement("div","snake")
    setPosition(snakeElement, segmemt);
    board.appendChild(snakeElement)
   })
}

//Food
function drawFood(){
    const foodElement = createGameElement ("div", "food");
    setPosition(foodElement, food)  
    board.appendChild(foodElement)
}
function generateFood(){
    const y = Math.floor((Math.random()*gridSize )+1);
    const x = Math.floor((Math.random()*gridSize )+1);
     return {x,y};
}

// create a snake and food cube/div     
function createGameElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set the position to snake and food
function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}






draw()

