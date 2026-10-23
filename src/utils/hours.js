/**
 * Calculates whether Veterinaria Huella is currently open based on Argentina time (America/Argentina/Buenos_Aires).
 *
 * Schedule:
 * - Lunes a Viernes: 09:00 a 19:30
 * - Sábados: 09:00 a 13:30
 * - Domingos: Cerrado
 */

export function getArgentinaStatus() {
  const timeZone = 'America/Argentina/Buenos_Aires';
  const now = new Date();

  // Get current day, hour, and minute in Argentina timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  let weekdayStr = '';
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === 'weekday') weekdayStr = part.value;
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  const currentMinutes = hour * 60 + minute;

  // Map weekdayStr to 0-6 (0 = Sunday, 1 = Monday, ...)
  const dayMap = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const dayOfWeek = dayMap[weekdayStr] ?? 0;

  let isOpen = false;
  let statusNote = '';

  // Monday (1) to Friday (5): 09:00 (540) to 19:30 (1170)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    const openTime = 9 * 60; // 09:00
    const closeTime = 19 * 60 + 30; // 19:30

    if (currentMinutes >= openTime && currentMinutes < closeTime) {
      isOpen = true;
      statusNote = 'Abierto ahora · Atiende hoy hasta las 19:30 hs';
    } else if (currentMinutes < openTime) {
      isOpen = false;
      statusNote = 'Cerrado ahora · Abre hoy a las 09:00 hs';
    } else {
      isOpen = false;
      if (dayOfWeek === 5) {
        statusNote = 'Cerrado ahora · Abre mañana sábado a las 09:00 hs';
      } else {
        statusNote = 'Cerrado ahora · Abre mañana a las 09:00 hs';
      }
    }
  } else if (dayOfWeek === 6) {
    // Saturday (6): 09:00 (540) to 13:30 (810)
    const openTime = 9 * 60;
    const closeTime = 13 * 60 + 30;

    if (currentMinutes >= openTime && currentMinutes < closeTime) {
      isOpen = true;
      statusNote = 'Abierto ahora · Atiende hoy hasta las 13:30 hs';
    } else if (currentMinutes < openTime) {
      isOpen = false;
      statusNote = 'Cerrado ahora · Abre hoy a las 09:00 hs';
    } else {
      isOpen = false;
      statusNote = 'Cerrado ahora · Abre el lunes a las 09:00 hs';
    }
  } else {
    // Sunday (0): Closed
    isOpen = false;
    statusNote = 'Cerrado los domingos · Abre el lunes a las 09:00 hs';
  }

  return {
    isOpen,
    statusNote,
    dayOfWeek, // 0-6 where 1 is Monday, 6 is Saturday, 0 is Sunday
    hour,
    minute,
  };
}
