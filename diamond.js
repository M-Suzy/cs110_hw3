const diamond = function(count){
	if(count%2 === 0){  // check if even
    count += 1;
	}
	 let n = count;
	 let pattern = "";
for (let i=1; i <= count; i+=2){
	pattern += " ".repeat(n-1) + "*".repeat(i) + "\n"; /* during cycle we have a pattern in which spaces and "*" will be 
	                                                         repeated in mentioned times and "\n" means to go next line */
    n-=1;
}
for (let i = count-2; i > 0; i-=2){
	pattern += " ".repeat(n+1) + "*".repeat(i) + "\n";
    n+=1;
}
	return pattern;
}
	console.log(diamond(5));
	