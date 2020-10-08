const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decexpr = '';
	let str = '';
	let i = 0;
    while(i < expr.length) {
		let elem = expr.slice(i, i+10);
		i += 10;
		let decelem = '';
		for(let j= 0; j<elem.length; j+=2) {
			let f = elem.slice(j, j+2);
			if( f === '10') {
				decelem += '.';
				} else if(f === '11') {
					decelem += '-';
					}
			};
		if(MORSE_TABLE[decelem] === undefined) {
			decexpr += ' ';
			} else decexpr += MORSE_TABLE[decelem];	
	}
	return decexpr;
}

module.exports = {
    decode
}