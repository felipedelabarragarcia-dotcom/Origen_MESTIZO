import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Admin123!", 10);
  await prisma.user.upsert({
    where: { email: "admin@origen.test" },
    update: {},
    create: {
      email: "admin@origen.test",
      name: "Admin",
      password: passwordHash,
      role: "admin"
    }
  });

  await prisma.product.createMany({
    data: [
      {
        title: "Producto de ejemplo 1",
        slug: "producto-ejemplo-1",
        description: "Descripción corta del producto ejemplo 1",
        priceCents: 1990,
        images: [],
        stock: 10
      },
      {
        title: "Producto de ejemplo 2",
        slug: "producto-ejemplo-2",
        description: "Descripción corta del producto ejemplo 2",
        priceCents: 2990,
        images: [],
        stock: 5
      }
    ]
  });

  console.log("Seed completado");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });