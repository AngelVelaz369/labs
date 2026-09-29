export function rubricPassFail(score) {
    const puntuacion = Number(score);
    return puntuacion >= 5 ? "Pass" : "Fail";
}