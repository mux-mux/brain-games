import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount = 0;
const game = 'startBrainEven';

export default function startBrainEven() {
  successCount = 0;
  const name = helloUser();

  const gameProccess = () => {
    showRules(game);
    const randNum = makeRand();
    console.log('Question: ' + randNum);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum, game)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        showVictory(name, game);
      }
    }
  };
  gameProccess();
}