process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const userName = process.stdin.read();

  if (userName) {
    process.stdout.write(`Your name is: ${userName}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
