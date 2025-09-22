// closure = A function defined inside another function,
//           the inner function has the access to the variables and
//           scope of the outer function .
//           Allow for private variables and state maintenace

// function outer() {
//   let message = "Hello World";
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }

// outer();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`count is: ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return{increment,getCount}
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`The current count is ${counter.getCount()}`);

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`Your score is ${score}`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`Your score is ${score}`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(10);
game.increaseScore(20);
game.decreaseScore(5);
console.log(`Final score is ${game.getScore()}`);
