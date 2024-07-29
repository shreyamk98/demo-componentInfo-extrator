import ts from 'typescript';
import path from 'path';

function isReactComponent(node: ts.Node, typeChecker: ts.TypeChecker): boolean {
	// Check if it's a variable statement with a FunctionComponent type or an arrow function
	if (ts.isVariableStatement(node)) {
		const declarationList = node.declarationList;

		if (declarationList.flags & ts.NodeFlags.Const) {
			for (const declaration of declarationList.declarations) {
				if (declaration.initializer && ts.isArrowFunction(declaration.initializer)) {
					const type = typeChecker.getTypeAtLocation(declaration.name);
					const symbol = type.aliasSymbol ?? type.symbol;

					if (symbol?.getName() === 'FunctionComponent') {
						return true;
					}
				}
			}
		}
	}
	// Check if it's a function declaration
	else if (ts.isFunctionDeclaration(node)) {
		const type = typeChecker.getTypeAtLocation(node);
		const callSignatures = type.getCallSignatures();

		for (const signature of callSignatures) {
			const returnType = typeChecker.getReturnTypeOfSignature(signature);
			if (returnType.symbol?.getName() === 'Element') {
				return true;
			}
		}
	}
	// Check if it's a function expression assigned to a variable
	else if (ts.isVariableDeclaration(node) && node.initializer && ts.isFunctionExpression(node.initializer)) {
		const type = typeChecker.getTypeAtLocation(node.name);
		const callSignatures = type.getCallSignatures();

		for (const signature of callSignatures) {
			const returnType = typeChecker.getReturnTypeOfSignature(signature);
			if (returnType.symbol?.getName() === 'Element') {
				return true;
			}
		}
	}

	return false;
}

function findReactComponents(sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker): void {
	function visit(node: ts.Node) {
		if (isReactComponent(node, typeChecker)) {
			console.log('Found React component:', node.getText());
		}
		ts.forEachChild(node, visit);
	}

	visit(sourceFile);
}

const fileNames = ['./index.tsx'];
const p = path.resolve(__dirname, 'index.tsx');
const program = ts.createProgram([p], {});
const typeChecker = program.getTypeChecker();

[p].forEach((fileName) => {
	const sourceFile = program.getSourceFile(fileName);
	if (sourceFile) {
		findReactComponents(sourceFile, typeChecker);
	}
});
