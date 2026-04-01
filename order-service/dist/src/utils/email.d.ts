interface EmailOptions {
    to: string;
    subject: string;
    text: string;
    html: string;
}
export declare const sendEmail: (options: EmailOptions) => Promise<import("nodemailer/lib/smtp-transport/index.js").SentMessageInfo>;
export {};
//# sourceMappingURL=email.d.ts.map