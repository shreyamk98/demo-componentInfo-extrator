import { withCustomConfig } from 'react-docgen-typescript';
import * as path from 'path';

// this will actually be passed in
const componentFile = path.join(__dirname, 'index.tsx');

const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
const parser = withCustomConfig(tsconfigPath, {
	shouldExtractLiteralValuesFromEnum: true,
	propFilter: (prop) => {
		return true;
	},
	// propFilter: (prop) => !/@types[\\/]react[\\/]/.test(prop.parent?.fileName || ''),
});
const components = parser.parse(componentFile);
if (components.length === 1) {
} else {
	// 0 or multiple possible components found in file
	// either add heuristic to see which is real, or error
}
console.log(JSON.stringify(components, null, 2));
