// Conditionals: Switch Statements

let playerOne;
let computer;

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;

    case "scissors":
        if (computer === "rock") {
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;

    case "rock":
        if (computer === "paper") {
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;

    default:
        if (computer === "scissors") {
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
}