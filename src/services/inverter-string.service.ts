export class InverterString {
    public static inverter(str: string): string {
        let invertida = "";
        for (let i = str.length - 1; i >= 0; i--) {
            invertida += str[i];
        }
        return invertida;
    }
}
