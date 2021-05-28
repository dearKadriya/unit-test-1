import checkHealth from './healthChecker';

test.each([
    [{ health: 60 }, 'healthy'],
    [{ health: 50 }, 'wounded'],
    [{ health: 40 }, 'wounded'],
    [{ health: 15 }, 'critical'],
    [{ health: 8 }, 'critical'],
    [{}, 'Невалидное значение'],
])(
    ('should check health'),
    (healthLevel, expected) => {
        const result = checkHealth(healthLevel);
        expect(result).toBe(expected);
    }
)

