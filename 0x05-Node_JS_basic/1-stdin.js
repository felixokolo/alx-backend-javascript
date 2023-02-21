process.stdin.setEncoding("utf-8");
console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("readable", () => {
  user_name = process.stdin.read();

  if (user_name) {
    process.stdout.write("Your name is: " + user_name);
  }
});

process.stdin.on("close", () => {
  process.stdout.write("This important software is now closing\n");
});
