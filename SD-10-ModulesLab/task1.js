export function costCalculator(amount) {
    const monto = parseFloat(amount);
    return monto + 3 + (monto * 0.01);
}