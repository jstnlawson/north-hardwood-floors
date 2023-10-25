import nodemailer from "nodemailer"
import SMPTransport from "nodemailer-smtp-transport"

export const smptEmail = process.env.GOOGLE_EMAIL;
export const smptPassword = process.env.GOOGLE_PASSWORD;

export const transporter = nodemailer.createTransport(
    SMPTransport( {
        service: "gmail",
        auth: {
            user: smptEmail,
            pass: smptPassword,
        },
    })
)