import { Layout } from "../../Components/Layout"
import { MyAcountForm } from "./MyAcountForm"
import {useContext,} from "react";
import { GlobalContext } from "../../Context";
function MyAcount() {
    const context = useContext(GlobalContext)
  
    return (
        <Layout>
             {!context.singIn && <MyAcountForm
               
                password = {context.password}
                password2 = {context.password2}
                setPassword = {context.setPassword}
                setPassword2 = {context.setPassword2}
                >
              
                </MyAcountForm>}
        {context.singIn && 
            <div className="w-80 h-80 bg-blue-900/40 rounded-lg flex flex-col flex-1 p-6">
                <div className="flex flex-col gap-4 mb-6">
                    <p className=" text-white">User Name: <span className='text-white/60'>{context.user}</span></p>
                    <p className=" text-white">Password: <span className='text-white/60'>{context.password}</span> </p>
                    <p className=" text-white"># total de ordenes: <span  className='text-white/60'>{context.lala.length}</span></p>
                </div>
                
            <div className="flex justify-center gap-2 w-full mt-10">
                <button className="bg-white text-black w-32 h-6 rounded-lg" onClick={()=>{
                    context.setPassword("")
                    context.setPassword2("")
                    context.setUser("")
                    context.setSingIn(false)
                }}>Sing out</button>
            </div> 

            </div>}
        </Layout>
      
    )
  }
  
  export{MyAcount}