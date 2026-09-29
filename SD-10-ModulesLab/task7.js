export function rubricPerfect(score) {
    const puntuacion = Number(score);
    if(puntuacion === 11){
        return "Perfect";
    }
    if(puntuacion > 8){
        return "Excellent";
    }
    return puntuacion >= 5 ? "Pass" : "Fail";
}