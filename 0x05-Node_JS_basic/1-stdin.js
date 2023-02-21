process.stdin.setEncoding('utf-8')
s  = process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
  console.log(chunk)
})
console.log(s)