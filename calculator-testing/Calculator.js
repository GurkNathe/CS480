// Cotangent function
function cot(x) {
	return 1 / Math.tan(x);
}

// Inverse cotangent function
function acot(x) {
	return Math.PI / 2 - Math.atan(x);
}

// List of possible tokens (not including numbers)
let tokens = [
	{
		token: "[",
		function: "[",
	},
	{
		token: "]",
		function: "]",
	},
	{
		token: "{",
		function: "{",
	},
	{
		token: "}",
		function: "}",
	},
	{
		token: "(",
		function: "(",
	},
	{
		token: ")",
		function: ")",
	},
	{
		token: "=",
		function: "",
	},
	{
		token: "+",
		function: "+",
	},
	{
		token: "-",
		function: "-",
	},
	{
		token: "*",
		function: "*",
	},
	{
		token: "/",
		function: "/",
	},
	{
		token: "^",
		function: "**",
	},
	{
		token: "%",
		function: "%",
	},
	{
		token: "√",
		function: "Math.sqrt",
	},
	{
		token: "sin",
		function: "Math.sin",
	},
	{
		token: "cos",
		function: "Math.cos",
	},
	{
		token: "tan",
		function: "Math.tan",
	},
	{
		token: "cot",
		function: "cot",
	},
	{
		token: "arcctg",
		function: "acot",
	},
	{
		token: "ln",
		function: "Math.log",
	},
	{
		token: "log",
		function: "Math.log10",
	},
	{
		token: "arcsin",
		function: "Math.asin",
	},
	{
		token: "arccos",
		function: "Math.acos",
	},
	{
		token: "arctan",
		function: "Math.atan",
	},
];

// Creates a string version of the expression and handles errors
function createEvaluation(expression) {
	let evalExpress = { express: [], error: -1 };

	// Checking for empty inputs
	if (expression.replace(/\s+/g, "") !== "") {
		let currentToken = "";
		for (let i = 0; i < expression.length; i++) {
			currentToken += expression[i];

			// Ignore whitespace
			if (currentToken === " " || currentToken === "") {
				continue;
			}

			// add to result if valid token
			for (let j = 0; j < tokens.length; j++) {
				if (tokens[j].token === currentToken) {
					if (currentToken === "-") {
						if (evalExpress.express[evalExpress.express.length - 1] === "-") {
							break;
						} else {
							evalExpress.express.push(currentToken);
						}
					} else {
						evalExpress.express.push(tokens[j].function);
					}
					currentToken = "";
					break;
				} else if (!isNaN(Number(currentToken))) {
					// adding numbers
					evalExpress.express.push(currentToken);
					currentToken = "";
					break;
				}
			}

			// If invalid token, set starting index of invalid token
			if (i === expression.length - 1 && currentToken !== "") {
				evalExpress.error = i - currentToken.length + 1;
				break;
			}
		}
	} else {
		// error setting when whitespace is entered
		evalExpress.error = "No expression entered.";
	}

	// bracket matching code
	let braketSet = [];
	evalExpress.express.forEach((element, index) => {
		if (element === "(" || element === "[" || element === "{") {
			braketSet.push(element);
			evalExpress.express[index] = "(";
		} else if (element === ")" || element === "]" || element === "}") {
			braketSet.push(element);
			evalExpress.express[index] = ")";
		}
	});

	let stack = [];
	for (let i = 0; i < braketSet.length; i++) {
		if (braketSet[i] === "(" || braketSet[i] === "[" || braketSet[i] === "{") {
			stack.push(braketSet[i]);
		} else {
			if (stack.length === 0) {
				evalExpress.error = i;
				break;
			} else {
				if (stack[stack.length - 1] === "(" && braketSet[i] === ")") {
					stack.pop();
				} else if (stack[stack.length - 1] === "[" && braketSet[i] === "]") {
					stack.pop();
				} else if (stack[stack.length - 1] === "{" && braketSet[i] === "}") {
					stack.pop();
				} else {
					evalExpress.error = i;
					break;
				}
			}
		}
	}

	return evalExpress;
}

// Evaluates the expression.
function evaluate(expression) {
	return new Function("return " + expression + ";");
}
