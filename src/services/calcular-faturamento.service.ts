import { Faturamento } from '../models/faturamento';

export class FaturamentoCalculador {
  public static calcularMenorFaturamento(faturamentos: Faturamento[]): number {
    const valores = faturamentos.map(f => f.valor).filter(valor => valor > 0);
    return Math.min(...valores);
  }

  public static calcularMaiorFaturamento(faturamentos: Faturamento[]): number {
    const valores = faturamentos.map(f => f.valor).filter(valor => valor > 0);
    return Math.max(...valores);
  }

  public static calcularMediaFaturamento(faturamentos: Faturamento[]): number {
    const valores = faturamentos.map(f => f.valor).filter(valor => valor > 0);
    const soma = valores.reduce((acc, val) => acc + val, 0);
    return soma / valores.length;
  }

  public static calcularDiasAcimaDaMedia(faturamentos: Faturamento[], media: number): number {
    return faturamentos.filter(f => f.valor > media).length;
  }
}
