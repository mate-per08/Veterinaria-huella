/**
 * Utility for tracking business events.
 * Logs cleanly via console.debug and delegates to window.gtag if present.
 *
 * @param {string} eventName - Name of the event (e.g. 'click_whatsapp', 'submit_appointment')
 * @param {Record<string, any>} [eventData] - Optional contextual parameters
 */
export function trackEvent(eventName, eventData = {}) {
  const payload = {
    ...eventData,
    timestamp: new Date().toISOString(),
  };

  // Structured console debug for inspection
  console.debug(`[Analytics Track] ${eventName}:`, payload);

  // If Google Tag (gtag) or Google Analytics 4 is present on window
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, payload);
    } catch (err) {
      console.warn('[Analytics Error]', err);
    }
  }
}
