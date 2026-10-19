import { Outlet } from "react-router"
import logo from '@/assets/platform-logo.png';

const AuthLauyout = () => {
    return (
        <div className="flex min-h-svh">
            <div className=" hidden lg:flex  flex-col justify-between  bg-linear-to-br from-[#06251A] to-[#10543A] p-12 lg:w-1/3 ">
                <div className="flex items-center gap-3 text-white">
                    <img src={logo} alt="Platform Admin Logo" className="size-12 round-xl shadow-lg shadow-black/20" />
                    <span className="font-bold text-2xl">Platfotm Admin</span>
                </div>
                <div className="text-white">
                    <h1 className="text-4xl font-bold">Run your store on your marketplace .</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ab?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ab?</p>
                </div>

                <div className=" text-white">

                    <p className="text-xs">&copy; Copyrights 2026 multitentant platform</p>
                </div>
            </div>

            

            <div className="flex flex-1 items-center justify-center bg-background p-8">
                <Outlet />
            </div>

        </div>
    )
}

export default AuthLauyout