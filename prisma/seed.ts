import { PrismaClient } from '../generated/prisma/client';
import { hash } from 'bcrypt-ts';
import { products as productsSeed } from './products';

const prisma = new PrismaClient();

async function main() {
  const masterPwd = await hash('~m@str..', 10);
  const adminPwd = await hash('~aju@rez.c.', 10);

  const owner = await prisma.user.upsert({
    where: { username: 'master' },
    update: {},
    create: {
      username: 'master',
      password: masterPwd,
      role: 'OWNER',
      name: 'Master User',
    },
  });

  const admin = await prisma.user.upsert({
    where: { username: 'ajuarezc' },
    update: {},
    create: {
      username: 'ajuarezc',
      password: adminPwd,
      role: 'ADMIN',
      name: 'Aylin Juarez',
    },
  });

  const categories = await prisma.category.createMany({
    data: [
      { name: 'Anvorguesa' },
      { name: 'Hot Dog' },
      { name: 'Banderilla' },
      { name: 'Bebidas' },
      { name: 'Paquetes' },
      { name: 'Extra' },
    ],
  });

  const products = await prisma.product.createMany({
    data: productsSeed,
  });

  console.log('Seeding completed. 🌱 ', {
    owner,
    admin,
    categories,
    products,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
