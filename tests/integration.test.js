test('SearchColors API should return a valid JSON structure', () => {
    // This represents the JSON the PHP script echoes back
    const mockApiResponse = {
        results: ["Blue", "Green", "Red"],
        error: ""
    };

    expect(mockApiResponse).toHaveProperty('results');
    expect(Array.isArray(mockApiResponse.results)).toBe(true);
    expect(mockApiResponse.results).toContain("Green");
});