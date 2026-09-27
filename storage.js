export function salvarRota(rota) {
    localStorage.setItem("ultimaRota", rota);
}

export function recuperarRota() {
    return localStorage.getItem("ultimaRota");
}