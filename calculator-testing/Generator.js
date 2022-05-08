// Generates a random character
makeid = (length) => {
	let result = "";
	let characters =
		"ABCDEGHJKLNQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@$&_`[]\\{}|;':\",.<>?";
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

// ALl valid tokens
let groups = {
	F: [
		"sin",
		"cos",
		"tan",
		"cot",
		"arcsin",
		"arccos",
		"arctan",
		"arcctg",
		"log",
		"ln",
	],
	I: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
	P: ["."],
	M: ["-"],
	"(": ["("],
	O: ["+", "*", "/", "^", "-"],
	")": [")"],
};

let mathGroups = {
	F: [
		"sin",
		"cos",
		"tan",
		"cot",
		"asin",
		"acos",
		"atan",
		"acot",
		"log10",
		"log",
	],
	I: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
	P: ["."],
	M: ["-"],
	"(": ["("],
	O: ["+", "*", "/", "^", "-"],
	")": [")"],
};

function igenerate(size, numExpressions) {
	let expressions = { math: [], mine: [] };
	for (let i = 0; i < Math.floor(numExpressions / 2); i++) {
		let choices = ["F", "I", "P", "M", "O", "(", ")"];
		let expression = "";
		let index = Math.floor(Math.random() * (choices.length + 1));
		if (index === choices.length) {
			let token = makeid(1);
			expression += token;
		}
		let token = choices[index];
		while (expression.length < size) {
			if (index === choices.length) {
				token = makeid(1);
			} else {
				token = choices[index];
			}

			if (token === "F") {
				expression += token;
				choices = ["F", "I", "P", "M", "O", ")"];
			} else if (token === "I") {
				if (size !== 1 && expression.length !== 0) {
					expression += token;
					choices = ["F", ")"];
				}
			} else if (token === "P") {
				expression += token;
				choices = ["F", "P", "M", "O", "(", ")"];
			} else if (token === "M") {
				expression += token;
				choices = ["M", "O", ")", "F", "P"];
			} else if (token === "O") {
				expression += token;
				choices = ["O", ")"];
			} else if (token === "(") {
				expression += token;
				choices = ["F", "P", "M", "O", "(", ")"];
			} else if (token === ")") {
				expression += token;
				choices = ["F", "I", "P", "M", "O", ")", "("];
			}

			index = Math.floor(Math.random() * (choices.length + 1));
		}

		let newExpression = { mine: "", math: "" };
		for (let i = 0; i < expression.length; i++) {
			if (["F", "I", "P", "M", "O", ")", "("].includes(expression[i])) {
				let index = Math.floor(Math.random() * groups[expression[i]].length);
				newExpression.mine += groups[expression[i]][index];
				newExpression.math += mathGroups[expression[i]][index];
			} else {
				newExpression.mine += expression[i];
				newExpression.math += expression[i];
			}
		}

		expressions.mine.push(newExpression.mine);
		expressions.math.push(newExpression.math);
	}
	return expressions;
}

// Generates numExpressions correct expressions of size size
function generate(size, numExpressions) {
	let expressions = { mine: [], math: [] };
	for (let i = 0; i < Math.floor(numExpressions / 2); i++) {
		let choices = ["F", "I", "P", "M", "("];
		let expression = "";
		let numPar = 0;
		let index = Math.floor(Math.random() * choices.length);
		let choice = choices[index];
		while (expression.length < size) {
			if (choice === "F") {
				expression += choice + "(";
				numPar++;
				choices = ["F", "I", "P", "M", "("];
			} else if (choice === "O") {
				expression += choice;
				choices = ["F", "I", "P", "M", "("];
			} else if (choice === "I") {
				expression += choice;
				if (numPar > 0) {
					choices = ["I", "P", "O", ")"];
				} else {
					choices = ["I", "P", "O"];
				}
			} else if (choice === "P") {
				for (let j = expression.length - 1; j >= 0; ) {
					if (expression[j] === "I") {
						j--;
					} else if (expression[j] === "P") {
						choice = "";
						break;
					} else {
						break;
					}
				}
				expression += choice;
				choices = ["I"];
			} else if (choice === "M") {
				expression += choice;
				choices = ["F", "I", "P", "M", "("];
			} else if (choice === "(") {
				expression += choice;
				numPar++;
				choices = ["F", "I", "P", "M", "("];
			} else if (choice === ")") {
				expression += choice;
				numPar--;
				if (numPar > 0) {
					choices = ["O", ")"];
				} else {
					choices = ["O"];
				}
			}
			index = Math.floor(Math.random() * choices.length);
			choice = choices[index];
		}
		if (
			expression[expression.length - 1] === "(" ||
			expression[expression.length - 1] === "M" ||
			expression[expression.length - 1] === "O" ||
			expression[expression.length - 1] === "P"
		) {
			expression += "I";
		}
		// adding leftover close parentheses
		if (numPar !== 0) {
			for (let i = 0; i < numPar; i++) {
				expression += ")";
			}
		}
		// converting to math expressions
		let newExpression = { mine: "", math: "" };
		for (let i = 0; i < expression.length; i++) {
			let index = Math.floor(Math.random() * groups[expression[i]].length);
			newExpression.mine += groups[expression[i]][index];
			newExpression.math += mathGroups[expression[i]][index];
		}
		expressions.mine.push(newExpression.mine);
		expressions.math.push(newExpression.math);
	}
	return expressions;
}
