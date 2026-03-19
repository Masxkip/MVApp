// File: src/lib/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function parseJsonSafe(res) {
  try {
    return await res.json();
  } catch {
    return {};
  }
}

export async function postQuote(payload) {
  const res = await fetch(`${API_BASE_URL}/api/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await parseJsonSafe(res);
  if (!res.ok) throw new Error(data?.message || "Failed to submit quote.");
  return data;
}