    it("should initialize correctly with given time and calls onChange function", () => {
        const onChange = vi.fn();
        renderHook(() => useTimeSelector("14:30", onChange));
        expect(onChange).toHaveBeenCalledWith("14:30");
    })
    it("should increase hour by 1 correctly", () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useTimeSelector("07:00", onChange))

        act(() => {
            result.current.incrementHours()
        })

        expect(result.current.hours).toBe(8)
        expect(onChange).toHaveBeenCalledWith("08:00")
    })

    it("should decrease hour by 1 correctly", () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useTimeSelector("07:00", onChange))

        act(() => {
            result.current.decrementHours()
        })

        expect(result.current.hours).toBe(6)
        expect(onChange).toHaveBeenCalledWith("06:00")
    })
