import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { validateInquiry } from "../../inquiry";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ message: "The form data could not be read." }, { status: 400 });
  }

  const { fields, data } = validateInquiry(body as Record<string, unknown>);
  if (Object.keys(fields).length) return Response.json({ fields }, { status: 422 });

  try {
    const directory = join(process.cwd(), ".data");
    await mkdir(directory, { recursive: true });
    await appendFile(join(directory, "inquiries.ndjson"), JSON.stringify({
      ...data, consent: true, receivedAt: new Date().toISOString(),
    }) + "\n", "utf8");
    return Response.json({ message: "Your request was saved on the local server." }, { status: 201 });
  } catch {
    return Response.json({ message: "Your request could not be saved. Please try again." }, { status: 500 });
  }
}
