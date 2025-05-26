/* eslint-disable @typescript-eslint/no-unsafe-call */
import { db } from "./server/db";

// Wrap in an async function to avoid top-level await issues
async function main() {
   await db.user.create({
        data: {
            emailAddress: "test@gmail.com",
            firstName: "test",
            lastName: "chong"
        }
    });
}

main().catch(console.error);