
import { render } from "@react-email/components";
import { transporter, smptEmail, smptPassword } from "@/utils/nodemailer";
// import { Email } from "@/app/Contact/Email";
import { Email } from "@/app/Contact/EmailStyle.jsx";



export async function POST(req) {
    const body = await req.json();
    const { name, email, city, serviceSuggestion, message } = body;

    const emailHtml = render(
        <Email name={name} email={email} city={city} serviceSuggestion={serviceSuggestion} message={message} />
    );

    const options = {
        from: smptEmail,
        to: smptEmail,
        subject: "New Project Request",
        html: emailHtml,
    };

    

    try {
        await transporter.sendMail(options);
        return Response.json({ message: "OK" })
    } catch (error) {
        console.error("Failed to send email:", error);
        res.status(500).send("Internal Server Error: " + error.message);
    }
}