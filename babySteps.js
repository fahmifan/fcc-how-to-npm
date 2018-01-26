let sum = 0;
for(let i = 2; i < process.argv.length; i++) {
	sum += Number.parseInt(process.argv[i], 10);
} 
console.log(sum);
