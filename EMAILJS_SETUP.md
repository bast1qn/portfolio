# 📧 EmailJS Setup Anleitung (Gmail)

Damit das Kontaktformular funktioniert, musst du EmailJS einrichten. Mit Gmail ist das super einfach! ✨

## 1️⃣ EmailJS Account erstellen

1. Gehe zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicke auf **"Sign Up"** (kostenlos bis 200 Emails/Monat)
3. Bestätige deine Email-Adresse

## 2️⃣ Gmail Service hinzufügen (EINFACH!)

1. Gehe zu [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Klicke auf **"Add New Service"**
3. Wähle **"Gmail"** aus
4. Klicke auf **"Connect Account"**
5. **Login mit deinem Google Account** `zencoderbasti@gmail.com`
6. Erlaube EmailJS den Zugriff
7. ✅ **FERTIG!** (Kein SMTP, kein Passwort nötig!)
8. **WICHTIG**: Kopiere die **Service ID** (z.B. `service_abc123`)

## 3️⃣ Email Template erstellen

1. Gehe zu **"Email Templates"** im Dashboard
2. Klicke auf **"Create New Template"**
3. Verwende folgendes Template:

**Subject:**
```
Neue Kontaktanfrage von {{from_name}} 🚀
```

**Content:**
```
Hey Bastian!

Du hast eine neue Nachricht über dein Portfolio!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Von: {{from_name}}
📧 Email: {{from_email}}
📝 Betreff: {{subject}}

💬 Nachricht:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Diese Nachricht wurde über dein Portfolio-Kontaktformular gesendet.

Best regards,
Dein automatisches Email-System ⚡
```

**Email Reply To:**
```
{{from_email}}
```

**To Email:**
```
zencoderbasti@gmail.com
```

4. Klicke auf **"Save"**
5. **WICHTIG**: Kopiere die **Template ID** (z.B. `template_xyz789`)

## 4️⃣ Public Key holen

1. Gehe zu **"Account"** → **"General"** im Dashboard
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

1. **Starte den Dev-Server neu**: `npm run dev`
2. Gehe zur Kontakt-Seite
3. Fülle das Formular aus und sende es ab
4. Du solltest eine Email an `zencoderbasti@gmail.com` bekommen! 🎉
5. Wenn es funktioniert, siehst du **Konfetti-Animation** 🎆

## ⚠️ Wichtig für Production (z.B. Vercel, Netlify)

- Die `.env` Datei wird **NICHT** auf GitHub hochgeladen (steht in `.gitignore`)
- Teile deine Keys **NIEMALS** öffentlich
- Für Production musst du die Environment Variables in den Deployment-Settings eintragen:

### **Vercel:**
1. Gehe zu deinem Projekt → **Settings** → **Environment Variables**
2. Füge hinzu:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### **Netlify:**
1. Gehe zu **Site settings** → **Environment variables**
2. Füge die gleichen 3 Variables hinzu

## 🎨 Was passiert wenn es funktioniert?

✅ Formular wird gesendet
✅ **50-Partikel Konfetti-Animation** explodiert! 🎆
✅ Grüner "Nachricht gesendet!" Status
✅ Email kommt bei `zencoderbasti@gmail.com` an
✅ Du kannst direkt auf die Email antworten (Reply-To ist die Email des Absenders!)

## 🆘 Probleme?

**"Emails kommen nicht an"**
- Prüfe den **Spam-Ordner** bei Gmail!
- Checke die Browser Console auf Fehler (F12)
- Stelle sicher, dass alle 3 Keys in `.env` korrekt sind

**"Public Key ungültig"**
- Stelle sicher, dass du den **Public Key** (nicht Private Key) verwendest
- Prüfe auf Tippfehler in der `.env` Datei

**"Template nicht gefunden"**
- Stelle sicher, dass die Template ID korrekt ist
- Das Template muss **gespeichert** sein

**"Service nicht gefunden"**
- Stelle sicher, dass du Gmail mit OAuth verbunden hast
- Prüfe die Service ID

## 💡 Vorteile von Gmail:

✅ Kein SMTP-Setup nötig
✅ Kein manuelles Passwort
✅ OAuth ist sicher
✅ Funktioniert sofort
✅ Keine Port/SSL/TLS Probleme
✅ Sehr zuverlässig

---

Bei weiteren Fragen:
- [EmailJS Dokumentation](https://www.emailjs.com/docs/)
- [EmailJS Gmail Guide](https://www.emailjs.com/docs/examples/gmail/)
