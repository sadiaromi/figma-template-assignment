import Image from "next/image";

export default function Footer() {
    return (
    <footer className="bg-black text-[#FFFFFF]">
            <div className="bg-[#E5C643] text-center py-20">
    <h2 className="text-3xl text-[#FFFFFF] uppercase font-poppins font-bold">Join Shopping Community to 
        <br />
        Get Monthly Promo</h2>
    <p className="mt-2 text-sm text-[#FFFCF8]">Type your email down below and be young wild generation</p>
    <div className="mt-4 flex justify-center text-[#000000]">
    <input
    type="email"
    placeholder="Add your email here"
    className="px-4 py-2 rounded-l-lg focus:outline-none"
    />
    <button className="bg-black text-[#FFFFFF] px-4 py-2 rounded-r-lg font-bold">
    Send
    </button>
    </div>
    </div>
    
   
    {/* Footer Links */}
    <div className=" bg-[#000000] py-10 px-5 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-4">
    <div>
    <h3 className="font-bold  text-lg text-[#FFFFFF] uppercase">Fashion</h3>
    <p className="text-sm mt-2 text-[#8E8E8E]">Complete your style with awesome clothes from us</p>
    <div className="flex gap-4 mt-4">
 <Image 
    src={"/images/facebook.logo.png"}
    alt="Facebook"
    width={52}
    height={52}
    />
    
    <Image 
    src={"/images/instagram.logo.png"}
    alt="Instagram"
    width={52}
    height={52}/>
    
    <Image 
    src={"/images/twitter.logo.png"}
    alt="Twitter"
    width={52}
    height={52}/>
    
    <Image 
    src={"/images/linkedin.logo.png"}
    alt="Linkedin"
    width={52}
    height={52}/>
    </div>
    </div>
    <div className="lg:ml-48">
    <h4 className="font-bold text-lg uppercase text-[#D9D9D9]">Company</h4>
    <ul className="mt-4 space-y-2 text-sm text-[#8E8E8E]">
    <li><a href="#">About</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Careers</a></li>
    </ul>
    </div>
    <div className="lg:ml-32">
    <h4 className="font-bold text-lg uppercase text-[#D9D9D9]">Quick Link</h4>
    <ul className="mt-4 space-y-2 text-sm text-[#7A7A7A]">
    <li><a href="#">Share Location</a></li>
    <li><a href="#">Order Tracking</a></li>
    <li><a href="#">Size Guide</a></li>
    <li><a href="#">FAQs</a></li>
    </ul>
    </div>
    <div className="lg:ml-24">
    <h4 className="font-bold text-lg uppercase text-[#EAEAEA]">Legal</h4>
    <ul className="mt-4 space-y-2 text-sm text-[#8E8E8E]">
    <li><a href="#">Terms & Conditions</a></li>
    <li><a href="#">Privacy Policy</a></li>
    </ul>
    </div>
    </div>
    </footer>
    );
   }
   
   