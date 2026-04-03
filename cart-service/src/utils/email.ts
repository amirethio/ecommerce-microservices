import nodemailer from "nodemailer";
import { logger } from "./logger";
import { AppError } from "./appError";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

/**
 * Utility to send emails using Nodemailer.
 * Configured via environment variables for security and flexibility.
 */
export const sendEmail = async (options: EmailOptions): Promise<any> => {
  try {
    // 1. Create transporter
    // Ensure these variables are defined in your .env file
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define mail options
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    // 3. Send the actual email
    const info = await transporter.sendMail(mailOptions);
    
    logger.info(`Email successfully sent to ${options.to}. MessageID: ${info.messageId}`);
    
    return info;
  } catch (error: any) {
    logger.error("Failed to send email:", error);
    
    // We throw a 500 AppError because email failure is usually a server-side configuration issue
    throw new AppError(
      "Error sending email. Please try again later.",
      500,
      { originalError: error.message }
    );
  }
};