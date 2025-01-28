export class FibonacciService {
    verificaFibonacci(numero: number): boolean {
        let a = 0,
            b = 1;
        while (a < numero) {
            const temp = a;
            a = b;
            b = temp + b;
        }
        return a === numero;
    }
}
