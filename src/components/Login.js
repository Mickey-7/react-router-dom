// created for authentication and protected routes

import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./auth"
import { useState } from "react"

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/';

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }

    return (
        <div>
            <label>
                Username:{''}
                <input onChange={(e) => setUser(e.target.value)} type="text" />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}