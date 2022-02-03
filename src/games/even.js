import readlineSync from 'readline-sync';

let answer;
let res;

function getRandom() {
  res = Math.floor(Math.random() * 100) + 1;
  return res;
}

// eslint-disable-next-line consistent-return
export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${getRandom()}`);
    answer = readlineSync.question('Your answer: ');
    if ((res % 2 === 0 && answer === 'yes') || (res % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } if (res % 2 === 0 && answer === 'no') {
      console.log("no' is wrong answer ;(. Correct answer was 'yes'");
      console.log(`Let's try again, ${userName}!`);
      // eslint-disable-next-line consistent-return
      return;
    } if (res % 2 !== 0 && answer === 'yes') {
      console.log("yes' is wrong answer ;(. Correct answer was 'no'");
      console.log(`Let's try again, ${userName}!`);
      // eslint-disable-next-line consistent-return
      return;
    } if (answer !== 'yes' && answer !== 'no') {
      console.log(`Do you speak English? ;). Let's try again, ${userName}!`);
      // eslint-disable-next-line consistent-return
      return;
    }
  }
  console.log(`Congratulations ${userName}!`);
};
