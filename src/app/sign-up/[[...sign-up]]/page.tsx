import { SignUp as ClerkSignUp } from "@clerk/nextjs"
export default function SignUp(){
    return (
        <div className='flex items-center justify-center h-screen'>
            <ClerkSignUp/>
        </div>
    )
}