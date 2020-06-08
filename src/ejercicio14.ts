/**
 * En una empresa se requiere calcular el salario semanal de cada uno de los n obreros que laboran en ella.
 *  El salario se obtiene así:  Si el obrero trabaja 40 horas o menos se le paga $20 por hora.
 * Si trabaja más de 40 horas se paga $20 por cada una de las primeras 40 horas y $25 por cada extra.
 */
class Ejercicio14 {
  constructor() {
    this.ejercicio14([45, 20]);
  }

  ejercicio14(horasTrabajo: number[]): void {
    const pagoXHora = 20;
    const extra = 25;
    let pagoSemanal = 0;

    horasTrabajo.forEach((element) => {
      if (element <= 40 || element > 40) {
        pagoSemanal = pagoXHora * element;
        console.log(`El pago semanal $${pagoSemanal}`);
      } else {
        pagoSemanal = pagoXHora * element;
        pagoSemanal = pagoSemanal + extra;
        console.log(`El pago semanal $${pagoSemanal}`);
      }
    });
  }
}

new Ejercicio14();