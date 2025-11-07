function findExpression(target) {
  function search(current, expr) {
    if (current === target) return expr;
    if (current > target) return undefined; // stop if we overshoot

    // Try both operations
    return (
      search(current * 2, expr + add4) ||
      search(current + 4, expr + mul2)
    );
  }

  return search(1, '1');
}

console.log(findExpression(8))
