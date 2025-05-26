import { db } from "@/server/db";

// /api/clerkwebhook
export const POST = async (req:Request)=>{
    const {data} = await req.json();
    const emailAddress = data.email_addresses?.[0].email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const imageUrl = data.image_url;
    const id = data.id;
   try {
    await db.user.upsert({
        where:{id},
        update:{
            emailAddress,
            firstName,
            lastName,
            imageUrl
        },
        create:{
            id,
            emailAddress,
            firstName,
            lastName,
            imageUrl
        }
    })
        console.log("user created");
    return new Response("Webhook received", {status:200});
   } catch (error) {
    console.error("Webhool error:", error);
    return new Response("Webhook error",{status:500})
   }

}