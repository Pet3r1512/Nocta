    const mockClassList = {
        add: vi.fn(),
        remove: vi.fn(),
        toggle: vi.fn()
    }

    beforeEach(() => {
        // reset all mocks
        vi.clearAllMocks()
        // mock local storage
        const localStorageMock = (() => {
            let store: Record<string, string> = {}
            return {
                getItem: (key: string) => store[key] || null,
                setItem: (key: string, value: string) => {
                    store[key] = value
                },
                clear: () => {
                    store = {}
                }
            }
        })()
        vi.stubGlobal("localStorage", localStorageMock)

        Object.defineProperty(document, "documentElement", {
            value: { classList: mockClassList },
            configurable: true
        })
    })
