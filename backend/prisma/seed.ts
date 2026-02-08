import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function main() {

    console.log("Starting seed");
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL must be valid!");
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    try {
        await prisma.user.upsert({ where: { id: "123    " }, update: {}, create: { id: "123", name: "admin", email: "admin@dynamox.com", password: "123456" } });
        console.log("Seed complete with sucess!");

    } catch (error) {
        console.error("Fatal error on seed: ", error);

    } finally {
        await prisma.$disconnect();
        await pool.end();
    }
}
main();