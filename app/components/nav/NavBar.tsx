import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import Image from "next/image";
import CartCount from "./CartCount";
import RegisterForm from "@/app/register/RegisterForm";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import SearchBar from "./SearchBar";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
    const currentUser = await getCurrentUser();

    return <div
        className="
    sticky
    top-0
    w-full
    bg-slate-200
    z-30
    shadow-sm
    "
    ><div className="py-4 border-b-[1px]">
            <Container>
                <div className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
            "
                >

                    <Link href="/" >
                        <Image
                            src="/LOGO.png"
                            fill
                            alt="logo image"
                            className="object-contain"

                            h-auto
                            id="logo"

                        />
                    </Link>
                    <div className="hidden md:block"><SearchBar/></div>
                    <div className="flex items-center gap-8 md:gap-12"

                    >
                        <CartCount />
                        <UserMenu currentUser={currentUser} />

                    </div>

                </div>
            </Container>

        </div>





    </div>
}

export default NavBar;