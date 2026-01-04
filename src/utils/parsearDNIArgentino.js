export function parsearDNIArgentino(texto) {
  if (!texto || typeof texto !== 'string') return null;

  console.log('🧾 Texto crudo PDF417:', texto);

  // Limpieza básica
  const limpio = texto
    .replace(/\r/g, '')
    .replace(/\n+/g, '\n')
    .toUpperCase();

  const partes = limpio.split('@');

  /**
   * Formato PDF417 DNI argentino (RENAPER):
   * [0] DNI
   * [1] Apellido
   * [2] Nombre
   * [3] Sexo
   * [4] DNI duplicado
   * [5] Fecha nacimiento (YYYYMMDD)
   */

  if (partes.length < 6) {
    console.warn('⚠️ Formato PDF417 inesperado');
    return null;
  }

  const dni = partes[0];
  const apellido = partes[1];
  const nombre = partes[2];
  const sexo = partes[3];

  const fechaRaw = partes[5];
  const fechaNacimiento =
    fechaRaw?.length === 8
      ? `${fechaRaw.slice(6, 8)}/${fechaRaw.slice(4, 6)}/${fechaRaw.slice(0, 4)}`
      : '';

  return {
    dni,
    apellido,
    nombre,
    sexo,
    fechaNacimiento,
  };
}
