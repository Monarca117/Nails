import type { ConvertedClientData } from "../types/ClientsData";

export function convertUserDataToJSON(data: DBData): ConvertedClientData[] {
    return data.rows.map((row: (string | number | Date | null)[]) => {
      return {
        id_Cliente: Number(row[0]),
        nombre_Cliente: row[1] as string,
        apellido_Cliente: row[2] as string,
        telefono: row[3] as string,
        correo: row[4] as string
      };
    });
  };

