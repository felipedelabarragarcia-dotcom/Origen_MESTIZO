# Origen_MESTIZO - E-commerce MVP

Proyecto Next.js + TypeScript con carrito de compras y panel administrador.

Stack:
- Next.js (app / pages)
- TypeScript
- Tailwind CSS
- Prisma (Postgres)
- NextAuth (autenticación)
- Cloudinary (storage de imágenes)
- Stripe (modo prueba)

Instrucciones rápidas:
1. Copia .env.example a .env y rellena las variables.
2. Instala dependencias: `npm install`
3. Ejecuta migraciones: `npx prisma migrate dev --name init`
4. Seed: `npm run seed`
5. Levanta: `npm run dev`

Seed admin:
- email: admin@origen.test
- password: Admin123!