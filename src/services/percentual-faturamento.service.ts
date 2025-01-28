export class PercentualFaturamento {
    private static faturamentoTotal: number = 67.83643 + 36.67866 + 29.22988 + 27.16548 + 19.84953;

    public static calcularPercentuais(estado: string, valor: number): string {
        const percentual = (valor / this.faturamentoTotal) * 100;
        return `${estado}: ${percentual.toFixed(2)}%`;
    }
}
