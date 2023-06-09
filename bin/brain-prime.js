import readlineSync from 'readline-sync';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount;
const game = 'startBrainPrime';

export default function startBrainPrime() {
  successCount = 0;

  const gameProccess = () => {
    showRules(game);
    const randNum = +makeRand(10);
    console.log(`Question: ${randNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum, game)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        console.log(`Congratulations!`);
        showVictory(name, game);
      }
    }
  };
  gameProccess();
}
