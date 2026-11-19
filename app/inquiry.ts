export const budget = { min: 50_000_000, max: 300_000_000, step: 5_000_000 };
export const rupiah = new Intl.NumberFormat("en-ID", {
  style: "currency", currency: "IDR", currencyDisplay: "code", maximumFractionDigits: 0,
});

export function jakartaDate() {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Jakarta" }).format(new Date());
}

export function validateInquiry(values: Record<string, unknown>) {
  const name = String(values.name ?? "").trim();
  const phone = String(values.phone ?? "").trim();
  const date = String(values.date ?? "");
  const guests = Number(values.guests);
  const preferences = String(values.preferences ?? "").trim();
  const estimatedBudget = Number(values.estimatedBudget);
  const fields: Record<string, string> = {};
  if (!name || name.length > 100) fields.name = "Enter your name using no more than 100 characters.";
  if (!/^\+?[\d .()-]+$/.test(phone) || !/^\d{8,15}$/.test(phone.replace(/\D/g, ""))) {
    fields.phone = "Enter a valid phone number with 8–15 digits.";
  }
  const parsedDate = new Date(date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(+parsedDate) ||
      parsedDate.toISOString().slice(0, 10) !== date || date < jakartaDate()) {
    fields.date = "Choose today or a future date.";
  }
  if (!Number.isSafeInteger(guests) || guests < 1) fields.guests = "Enter a whole number of at least 1 guest.";
  if (preferences.length > 1000) fields.preferences = "Use no more than 1,000 characters.";
  if (!Number.isInteger(estimatedBudget) || estimatedBudget < budget.min || estimatedBudget > budget.max ||
      (estimatedBudget - budget.min) % budget.step) fields.estimatedBudget = "Choose a budget within the available range.";
  if (values.consent !== true) fields.consent = "Check the consent box to prepare your message.";
  return { fields, data: { name, phone, date, guests, preferences, estimatedBudget } };
}
