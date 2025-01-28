import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import { Faturamento } from '../models/faturamento';

export class FaturamentoService {
  public static async lerJson(caminho: string): Promise<Faturamento[]> {
    const data = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(data);
  }

  // public static async lerXml(caminho: string): Promise<Faturamento[]> {
  //   const data = fs.readFileSync(caminho, 'utf-8');
  //   const json = await parseStringPromise(data);
  //   return json.row.map((item: any) => ({
  //     dia: parseInt(item.dia[0]),
  //     valor: parseFloat(item.valor[0]),
  //   }));
  // }
}
