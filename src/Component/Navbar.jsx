"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
 const userdata = authClient.useSession(); 
    const users = userdata.data?.user;
    const handleSignout= async()=>{
        await authClient.signOut();
        alert("Logout success");
    }

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">SkillSphere</h3>
                </div>

                 <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/courses"}>Courses</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>My Profile</Link>
                    </li>

                </ul>


                <div className="flex gap-4">
                    {!users && <ul className="flex items-center  text-sm">
                        <li>
                            <Link href={"/signup"}>User Registration || </Link>
                        </li>
                        <li>
                            <Link href={"/signin"}> SignIn</Link>
                        </li>
                    </ul>}
                    {users && <div className="flex gap-1">
                        <p>{users.name}</p>
                        <Avatar size="sm">
                            <Avatar.Image alt="John Doe" src={users?.image}
                                name={users?.name} />
                            <Avatar.Fallback>{users?.name.charAt(2)}</Avatar.Fallback>
                        </Avatar>
                        <Button size="sm" variant="danger" onClick={handleSignout} >Sign Out</Button>
                    </div>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;