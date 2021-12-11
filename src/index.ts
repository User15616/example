import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


// A `main` function so that you can use async/await

async function main() {

    const usersCount = await prisma.users.count();

    console.dir(`Number of entries in table users is ${usersCount}`);

}


main()

    .catch((e) => {

        throw e

    })

    .finally(async () => {

        await prisma.$disconnect()

    })