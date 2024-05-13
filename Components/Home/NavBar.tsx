import { auth } from "@/auth"
import SignUpButton from "./SignUpButton";
import Logo from "./Logo";

export default async function NavBar() {
    
    const session=await auth();

    return (
        <>  
            <div className="fized z-[5] top-0 h-[5rem]  bg-black  ">
               <Logo/>
            <SignUpButton session={session?.user}/>
            </div>
         
        </>
    )
}
