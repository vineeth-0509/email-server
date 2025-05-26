import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const createPrismaClient = () => new PrismaClient();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
