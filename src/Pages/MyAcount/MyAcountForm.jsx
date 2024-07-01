/* eslint-disable react/prop-types */
import {useState, useContext} from "react";
import { GlobalContext } from "../../Context";

const MyAcountForm = (props)=>{

    const context = useContext(GlobalContext)
    const [match, setMatch] = useState(false)

    
    const validate = ()=>{
            
            if(props.password.length > 0 && props.password2.length > 0 && props.password === props.password2){
                setMatch(false)
                const userName = document.getElementById("username").value
                context.setUser(userName);
                context.setSingIn(true)
               
            }else{
                setMatch(true)
               
            }
    }

    return (
    <form className="w-80 h-80  bg-blue-900/40 rounded-lg flex flex-col justify-center p-6" onSubmit={(event) => event.preventDefault()}>
        <label className="text-sm text-white" htmlFor="username" >E-mail</label>
    
        <input className="w-full bg-transparent border-b focus:outline-none text-white mb-6"
        type="text" id="username" name="username" autoComplete="current-userName" required />

        <label className="text-sm text-white" htmlFor="password">Password</label>

        <input className="w-full bg-transparent border-b focus:outline-none text-white mb-6"
        type="password" id="password" name="password" autoComplete="current-password" required onChange={(event)=>props.setPassword(event.target.value)}></input>

        
        <label className="text-sm text-white" htmlFor="password2">Confirm Password</label>
         <input className="w-full bg-transparent border-b focus:outline-none text-white mb-6"
        type="password" id="password2" name="password2" autoComplete="current-password" required onChange={(event)=>props.setPassword2(event.target.value)}></input>

        {match && <label className="text-white text-xs p-0 -mt-6">Password does not match*</label>
}
        <div className="flex justify-center gap-2 w-full mt-10">
          <button className="bg-white text-black w-32 h-6 rounded-lg" onClick={()=> validate()}>Create account</button>
        </div> 
  </form>
    )
}


export {MyAcountForm}