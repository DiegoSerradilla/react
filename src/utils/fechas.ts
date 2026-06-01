import { differenceInDays } from "date-fns";

export function calcularDiasEntreFechas(
  fechaInicio: Date,
  fechaFin: Date
): number {
  return differenceInDays(fechaFin, fechaInicio);
}