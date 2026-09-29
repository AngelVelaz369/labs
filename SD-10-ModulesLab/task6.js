export function rubricExcellent(score) {
    const puntuacion = Number(score);
    if (puntuacion > 8){
        return "Excellent";
    }
    return puntuacion >= 5 ? "Pass" : "Fail";
}