export class SomaService {
    calcularSoma(): number {
        let indice = 13,
            soma = 0,
            k = 0;
        while (k < indice) {
            k++;
            soma += k;
        }
        return soma;
    }
}
