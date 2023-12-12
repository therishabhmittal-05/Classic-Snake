// Defining HTML Elements
const board = document.getElementById("game-board")

// game Variables
let gridSize = 20;
let snake = [{x:10,y:10}]
let food = generateFood()
let direction = "right";

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
//generate food
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
//moving the snake
function move(){
    const head = {...snake[0]};
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "right":
            head.x++;
            break;
        case "left":
            head.x--;
            break;
        
    }
    snake.unshift(head);
    snake.pop();
}

//testing the move function
// setInterval(() => {
//     move();
//     draw();
// }, 200);





draw()

