// Connect your analytics provider by listening for this event. Never include form values or PII.
export function track(name: string, properties: Record<string, string> = {}) {
  window.dispatchEvent(new CustomEvent("onesash:analytics", { detail: { name, properties } }))
}
