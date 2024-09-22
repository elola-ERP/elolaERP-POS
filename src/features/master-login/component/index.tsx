"use client"
import { Input, Button } from "@/src/features";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { EyeCloseIcon, EyeOpenIcon } from "@/src/assets";
import { loginRequestProps } from "../type";
import { token } from "@/src/config";
import { loginRequest } from "../api";
import { ELolaLogo } from "@/src/assets/internalIcon/elolaLogo";

export function MasterLogin() {
  const [showPassword, setShowPassword] = useState(false);

  // rememeber, this use router shoud be import from next/navigation
  const router = useRouter(); 

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const {mutate} = useMutation({
    mutationFn: ( payload : loginRequestProps) => loginRequest(payload),
    onSuccess: (data) => {
        const {access_token} = data.data
        console.log("Token to be set:", access_token);
        // console.log("login success, received token", access_token)
        Cookies.set(token, access_token);
        // console.log("token is set in cookies, now redirecting to product page")
        router.push("/pos")
    },
    onError: (error) => {
        console.log("login failed", error)
    }
  })

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const email = formData.get("email")
      const password = formData.get("password")
    
      if (!email || !password) {
          console.log("email or password not found")
          return
      }

    const payload = {
        email : email!.toString(),
        password : password!.toString() 
    }

    console.log("payload", payload)

    mutate(payload)
  }

  return (
    <div className="w-full bg-gradient-to-t from-[#9A97DA] to-[#2E3248]">
        <div className="h-[100svh] w-96 flex justify-center items-center m-auto">
            <form onSubmit={loginHandler} className="space-y-2 text-white" data-cy="login-form">
                <div className="flex justify-center">
                <ELolaLogo
                />
                </div>
                <Input label="E-mail" name="email" data-cy="email-input" labelClassName="text-white"/>
                <Input
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    rightNode={showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
                    rightNodeClick={showPasswordHandler}
                    data-cy="password-input"
                    labelClassName="text-white"
                />
                <Button
                    type="submit"
                    data-cy="login-button"
                    className="bg-white text-[#9A97DA] hover:bg-white hover:text-custom-blue font-bold py-2 px-4 rounded border border-custom-blue">
                    Login
                </Button>
                <p className="text-center text-xs">
                    Not registered? Click <a href="/register">Register</a>
                </p>
            </form>
        </div>
    </div>
    
    
  );
}
