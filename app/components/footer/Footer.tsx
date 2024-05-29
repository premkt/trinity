import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import {MdFacebook} from "react-icons/md"
import {AiFillTwitterCircle,
    AiFillInstagram  ,
    AiFillYoutube
} from "react-icons/ai"

const Footer = () => {
    return <footer className="bg-slate-700 text-slate-200 text-sm mt-16 ">
    <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
           <FooterList>
            <h3 className="text-base font-bold mb-2">Categories</h3>
            <Link href="#">CCTV</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">AntiVirus</Link>
            <Link href="#">Accessories</Link>
           </FooterList>
           <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchange</Link>
            <Link href="#">AntiVirus</Link>
            <Link href="#">Accessories</Link>
           </FooterList>
           <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p>
            Welcome to Trinity Solutions - Your Trusted Source for Tech Solutions!</p>

            <p>At Trinity Solutions, we understand the importance of security and reliability in today's fast-paced digital world. That's why we've curated a comprehensive selection of top-notch products to meet your technological needs. Whether you're safeguarding your home or upgrading your professional workspace, we have you covered with our range of CCTV cameras, laptops, desktops, and antivirus solutions.
            </p>
            <p>&copy; {new Date (). getFullYear()} Trinity Solutions. All right reserved</p>
            </div>
           <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
            <Link href="#"><MdFacebook size={24}/></Link>
            <Link href="#"><AiFillTwitterCircle size={24}/></Link>
            <Link href="#"><AiFillInstagram size={24}/></Link>
            <Link href="#"><AiFillYoutube size={24}/></Link>
             </div>
           </FooterList>
        </div>

    </Container>
    
    </footer>
}
 
export default Footer;