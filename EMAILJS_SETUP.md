# 📧 EmailJS Setup Anleitung

Damit das Kontaktformular funktioniert, musst du EmailJS einrichten. Folge diesen Schritten:

## 1️⃣ EmailJS Account erstellen

1. Gehe zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicke auf **"Sign Up"** (kostenlos bis 200 Emails/Monat)
3. Bestätige deine Email-Adresse

## 2️⃣ Email Service hinzufügen

1. Gehe zu [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Klicke auf **"Add New Service"**
3. Wähle **"Gmail"** oder **"Other"** (für GMX)
4. Für GMX:
   - SMTP Server: `mail.gmx.net`
   - Port: `587`
   - Email: `giersch.bastian@gmx.de`
   - Password: Dein GMX Passwort
5. Klicke auf **"Create Service"**
6. **WICHTIG**: Kopiere die **Service ID** (z.B. `service_abc123`)

## 3️⃣ Email Template erstellen

1. Gehe zu **"Email Templates"** im Dashboard
2. Klicke auf **"Create New Template"**
3. Verwende folgendes Template:

**Subject:**
```
Neue Kontaktanfrage von {{from_name}}
```

**Content:**
```
Du hast eine neue Nachricht von deiner Portfolio-Website!

Von: {{from_name}}
Email: {{from_email}}
Betreff: {{subject}}

Nachricht:
{{message}}

---
Diese Nachricht wurde über dein Portfolio-Kontaktformular gesendet.
```

4. Klicke auf **"Save"**
5. **WICHTIG**: Kopiere die **Template ID** (z.B. `template_xyz789`)

## 4️⃣ Public Key holen

1. Gehe zu **"Account"** → **"General"**
2. Finde **"Public Key"** (auch "API Key" genannt)
3. **WICHTIG**: Kopiere den **Public Key** (z.B. `a1b2c3d4e5f6g7h8`)

## 5️⃣ .env Datei ausfüllen

1. Öffne die `.env` Datei in deinem Portfolio-Projekt
2. Füge deine Keys ein:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=a1b2c3d4e5f6g7h8
```

3. Speichern!

## 6️⃣ Testen

1. Starte den Dev-Server neu: `npm run dev`
2. Gehe zur Kontakt-Seite
3. Fülle das Formular aus und sende es ab
4. Du solltest eine Email an `giersch.bastian@gmx.de` bekommen! 🎉

## ⚠️ Wichtig

- Die `.env` Datei wird **NICHT** auf GitHub hochgeladen (steht in `.gitignore`)
- Teile deine Keys **NIEMALS** öffentlich
- Für Production (z.B. Vercel/Netlify) musst du die Environment Variables in den Deployment-Settings eintragen

## 🆘 Probleme?

**"Emails kommen nicht an"**
- Prüfe ob dein GMX Passwort korrekt ist
- Checke den Spam-Ordner
- Prüfe die Browser Console auf Fehler

**"Public Key ungültig"**
- Stelle sicher, dass du den Public Key (nicht Private Key) verwendest
- Prüfe auf Tippfehler

**"Template nicht gefunden"**
- Stelle sicher, dass die Template ID korrekt ist
- Das Template muss gespeichert sein

---

Bei weiteren Fragen: [EmailJS Dokumentation](https://www.emailjs.com/docs/)
