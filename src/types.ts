export type abc = { c: number; sC: (v: number) => void; m: MyEnum };
export type bcd = { count: number; setCount: (v: number) => void };

enum MyEnum {
	First,
	Second,
	Third,
}
