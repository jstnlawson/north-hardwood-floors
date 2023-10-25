
import { render } from "@react-email/components";
import { transporter, smptEmail, smptPassword } from "@/utils/nodemailer";
import { Email } from "@/app/Contact/Email";

export async function POST(req,res) {
    const body = await req.json();
    const { name, email, city, message } = body;

    console.log('SMTP Email:', smptEmail);
    console.log('SMTP Password:', smptPassword);

    const emailHtml = render(
        <Email name={name} email={email} city={city} message={message} />
    );

    const options = {
        from: smptEmail,
        to: smptEmail,
        subject: "New Project Request",
        html: emailHtml,
    };

    

    try {
        // Send email using the transporter
        await transporter.sendMail(options);
        console.log("option:", options)
        res.status(200).send("OK"); // Send "OK" response to the client
    } catch (error) {
        console.error("Failed to send email:", error);
        res.status(500).send("Internal Server Error"); // Send an error response if there's an issue
    }
}