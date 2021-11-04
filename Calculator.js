// Cotangent function
function cot(x) {
	return 1 / Math.tan(x);
}

// Inverse cotangent function
function acot(x) {
	return Math.PI / 2 - Math.atan(x);
}

// possible values besides numbers
let tokens = [
	{
		token: "=",
		function: "",
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
	if (expression.replace(/\s+/g, "") !== "") {
		let currentToken = "";
		for (let i = 0; i < expression.length; i++) {
			currentToken += expression[i];

			if (currentToken === " " || currentToken === "") {
				continue;
			}

			// add to result if valid token
			for (let j = 0; j < tokens.length; j++) {
				if (tokens[j].token === currentToken) {
					evalExpress.express.push(tokens[j].function);
					currentToken = "";
					break;
				} else if (!isNaN(Number(currentToken))) {
					// adding numbers
					evalExpress.express.push(currentToken);
					currentToken = "";
					break;
				}
			}

			if (i === expression.length - 1 && currentToken !== "") {
				evalExpress.error = i - currentToken.length + 1;
				break;
			}
		}
	} else {
		// error setting when whitespace is entered
		evalExpress.error = "No expression entered.";
	}
	return evalExpress;
}

// Evaluates the expression.
function evaluate(expression) {
	return new Function("return " + expression);
}
