import utils from "./index.js";

describe("工具方法测试", () => {
	describe("isExistent(存在方法)测试", () => {
		test("传一个参数时可以判断存在与否", () => {
			expect(utils.isExistent({})).toBeFalsy();
			expect(utils.isExistent([])).toBeFalsy();
			expect(utils.isExistent(undefined)).toBeFalsy();
			expect(utils.isExistent("")).toBeFalsy();
			expect(utils.isExistent({ a: 1 })).toBeTruthy();
			expect(utils.isExistent(1)).toBeTruthy();
			expect(utils.isExistent(0)).toBeTruthy();
			expect(utils.isExistent("test")).toBeTruthy();
		});

		test("传两个参数:如果第一个参数判断为false,则取用第二参数作为备选值", () => {
			expect(utils.isExistent({}, 1)).toBe(1);
			expect(utils.isExistent({}, { a: 1 })).toEqual({ a: 1 });
			expect(utils.isExistent({ a: 1 }, 1)).toEqual(true);
			expect(utils.isExistent([], 1)).toBe(1);
			expect(utils.isExistent(undefined, 1)).toBe(1);
			expect(utils.isExistent("", 1)).toBe(1);
		});
	});
});
