import { FaturamentoService } from "./services/ler-faturamento.service";
import { FaturamentoCalculador } from "./services/calcular-faturamento.service";
import { PercentualFaturamento } from "./services/percentual-faturamento.service";
import { InverterString } from "./services/inverter-string.service";
import { SomaService } from "./services/soma-loop.service";
import { FibonacciService } from "./services/fibonacci.service";

async function iniciar() {
    const faturamentosJson = await FaturamentoService.lerJson("src/data/faturamento.json");

    const fibonacciService = new FibonacciService();
    const somaService = new SomaService();

    console.log("Exercício 1: Soma calculada no loop");
    console.log(`Resultado: ${somaService.calcularSoma()}`);

    console.log("\nExercício 2: Verificação na sequência de Fibonacci");
    const numero = 21;
    console.log(`O número ${numero} pertence à sequência? ${fibonacciService.verificaFibonacci(numero) ? "Sim" : "Não"}`);

    const menor = FaturamentoCalculador.calcularMenorFaturamento(faturamentosJson);
    const maior = FaturamentoCalculador.calcularMaiorFaturamento(faturamentosJson);
    console.log("\nExercício 3: Faturamento");
    console.log(`Menor Faturamento: ${menor}`);
    console.log(`Maior Faturamento: ${maior}`);

    const media = FaturamentoCalculador.calcularMediaFaturamento(faturamentosJson);
    console.log(`Média de Faturamento: ${media}`);

    const diasAcimaDaMedia = FaturamentoCalculador.calcularDiasAcimaDaMedia(faturamentosJson, media);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);

    console.log("\nExercício 4: Percentuais");
    console.log(PercentualFaturamento.calcularPercentuais("SP", 67836.43));
    console.log(PercentualFaturamento.calcularPercentuais("RJ", 36678.66));
    console.log(PercentualFaturamento.calcularPercentuais("MG", 29229.88));
    console.log(PercentualFaturamento.calcularPercentuais("ES", 27165.48));
    console.log(PercentualFaturamento.calcularPercentuais("Outros", 19849.53));

    console.log("\nExercício 5: Inverter String");
    console.log(InverterString.inverter("Node.js"));
}

iniciar();
