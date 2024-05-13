import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";


export const {handlers,signIn,signOut,auth}=NextAuth({
    providers:[
        Credentials(
            {
            credentials:{
                email:{},
                password:{}
            },
            authorize:(credentials)=>{   
                //check db ki user exits or not.
               if( credentials.email==="nitesh@gmail.com" &&  credentials.password==="12345678"){
                return {
                
                };
               }
               else{
                return null
               }
               
            }
            }
        )
        ,google],
})