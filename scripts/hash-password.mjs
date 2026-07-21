// Vygeneruje bcrypt hash hesla a náhodný AUTH_SECRET pre nastavenie admina.
// Použitie: node scripts/hash-password.mjs "vaše-heslo"
import bcrypt from "bcryptjs";
import { randomBytes } from "node:crypto";

const password = process.argv[2];
if (!password) {
  console.error('Použitie: node scripts/hash-password.mjs "vaše-heslo"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);
const authSecret = randomBytes(32).toString("base64");

console.log("\nSkopírujte tieto premenné do Vercel → Settings → Environment Variables:\n");
console.log("ADMIN_PASSWORD_HASH=" + hash);
console.log("AUTH_SECRET=" + authSecret);
console.log(
  "\n(AUTH_SECRET je náhodný – ak ho zmeníte, všetci sa odhlásia. ADMIN_PASSWORD_HASH zodpovedá zadanému heslu.)\n"
);
