import readlineSync from 'readline-sync';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount;
const game = 'startBrainEven';

export default function startBrainEven() {
  successCount = 0;

  const gameProccess = () => {
    showRules(game);
    const randNum = makeRand(100);
    console.log('Question: ' + randNum);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum, game)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        console.log(`Congratulations!`);
        showVictory(game);
      }
    }
  };
  gameProccess();
}
