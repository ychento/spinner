
const chars = ['|', '/', '-', '\\', '|'];
let when = 0;

for (const spinner of chars){
  when += 200;
  setTimeout(() => {
    process.stdout.write(`\r${spinner}  `);
  }, when);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 2000);


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

