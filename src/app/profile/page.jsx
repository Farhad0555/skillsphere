'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { WithForm } from "../../Component/userupdatemodal";
const profileshowpage = () => {
    const userdata = authClient.useSession();
    const users = userdata.data?.user;
    return (
        <div>
            <Card className="max-w-7xl mx-auto flex flex-col items-center">
                <Avatar size="h-50 w-50">
                    <Avatar.Image alt="John Doe" src={users?.image}
                        name={users?.name} />
                    <Avatar.Fallback>{users?.name.charAt(2)}</Avatar.Fallback>
                </Avatar>
                <p>{users?.name}</p>
                <p>{users?.email}</p>
                <WithForm></WithForm>
            </Card>
        </div>
    );
};

export default profileshowpage;