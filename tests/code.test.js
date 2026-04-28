const { formatColor, createColorPayload, parseCookie } = require("../public/js/code");

test("formatColor trims and lowercases", () => {
	expect(formatColor("  RED ")).toBe("red");
});

test("createColorPayload builds correct object", () => {
	const result = createColorPayload(" Blue ", 5);

	expect(result).toEqual({
		color: "blue",
		userId: 5
	});
});

test("parseCookie extracts user data", () => {
	const cookie = "firstName=Simon,lastName=Cito,userId=10";

	const result = parseCookie(cookie);

	expect(result.firstName).toBe("Simon");
	expect(result.lastName).toBe("Cito");
	expect(result.userId).toBe(10);
});