import { auth } from "@/auth"
import SignUpButton from "./SignUpButton";
import Logo from "./Logo";

export default async function NavBar() {
    
    const session=await auth();

    return (
        <>  
            <div className="relative ">
               <Logo/>
            <SignUpButton session={session?.user}/>
            </div>
         
        </>
    )
}
