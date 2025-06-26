import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { firstname, lastname, email, phone, subject, message } = req.body;

    console.log('Données reçues:', req.body);
    if (!firstname || !lastname || !email || !subject || !message) {
        return res.status(400).json({ error: 'Veuillez remplir tous les champs requis.' });
    }
    console.log('gg', process.env.EMAIL_USER,
        process.env.EMAIL_PASS)
    try {
        // Configurer le transporteur nodemailer
        const transporter = nodemailer.createTransport({
            host: "mailpro1.tn.oxa.host",
            port: 587,
            secure: false, // false pour STARTTLS sur port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: true,
            },
        });

        // Contenu de l'email
        const mailOptions = {
            from: `"${firstname} ${lastname}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message - ${subject}`,
            html: `
        <h2>Nouvelle prise de contact</h2>
        <p><strong>Nom:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email envoyé avec succès.' });

    } catch (error) {
        console.error('Erreur lors de l’envoi de l’email :', error);
        return res.status(500).json({ error: 'Erreur lors de l’envoi du message.' });
    }
});

export default router;
