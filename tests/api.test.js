test("mock API response structure", () => {
	const mockResponse = {
		results: ["red", "blue", "green"]
	};

	expect(Array.isArray(mockResponse.results)).toBe(true);
	expect(mockResponse.results.length).toBeGreaterThan(0);
});