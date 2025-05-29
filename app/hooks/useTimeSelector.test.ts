    it("should initialize correctly with given time and calls onChange function", () => {
        const onChange = vi.fn();
        renderHook(() => useTimeSelector("14:30", onChange));
        expect(onChange).toHaveBeenCalledWith("14:30");
    })
