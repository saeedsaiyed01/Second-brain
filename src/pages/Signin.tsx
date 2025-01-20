import axios from 'axios';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { InputBox } from '../components/ui/InputBox';
import { BACKEND_URL } from "../config";


export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

     async function signin() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        const response: any = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
    }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-h-48 p-8">
        <InputBox reference={usernameRef} placeholder="username" />
        <InputBox reference={passwordRef}placeholder="password" />
        <div className="flex justify-center pt-4">
        <Button onClick={signin} loading={false} fullWidth={true} variant="Auth"  size="md" text="Signin"/>
        </div>
      </div>
     
    </div>
  )
}

export default Signin
