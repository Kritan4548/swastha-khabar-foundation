import EmailTemplate from "@/components/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const bodyResponse = await req.json();
    const type =
      bodyResponse.type === "register"
        ? "Event Registration"
        : bodyResponse?.type === "volunteer"
        ? "Volunteer Registration"
        : "Collaboration";
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      // to: ["info@swasthyafoundation.org"],
      to: ["kundali.appharu@gmail.com", "info@swasthyafoundation.org"],
      subject: type,
      react: EmailTemplate({ bodyResponse: bodyResponse }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
