let line = [];

// while loop might be helpful
for(let i = 1; i < 8; i++){
        for(let len = 1; line.length < 8; len++){
            if(len % 2 == 0){
                line.push('#');
            } else if(len % 2 !== 0){
                line.push(' ');
            } else if(line.length % 8 == 0){
                len.push('\n');
            }
        }
    console.log(line);
}
