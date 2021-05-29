const healthBar = {
  healthy: {
    health: 50,
  },
  wounded: {
    health: 15,
  },
  critical: {
    health: 0,
  },
  fff: {
    health: 400,
  },

};

export default function checkHealth(data) {
  const sorted = Object.fromEntries(Object.entries(healthBar).sort((x, y) => y[1].health - x[1].health));
  const healthBarColor = Object.keys(sorted).find((color) => data.health > sorted[color].health);
  if (!healthBarColor) return 'Невалидное значение';
  return healthBarColor;
}

const testData = { name: 'Маг', health: 401 };

checkHealth(testData);
