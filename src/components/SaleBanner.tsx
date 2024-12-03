import Image from "next/image";

export default function SaleBanner() {
 return (
 <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFDE6C] px-4 py-0">

 {/* Left Section: Image */}
 <div className="relative">
 <Image
 src="/images/model.img.png"
 alt="Woman Payday Sale"
 width={991.42}
 height={968}
 className="rounded-lg"
 />
 
 </div>

 {/* Right Section: Content */}
 <div className="relative lg:-mt-56 mt-10 md:mt-0 text-center md:text-left md:pl-8">
 <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-black">
 <span className="bg-white px-4 py-1 inline-block transform -rotate-2">
 Payday
 </span>
 <br /> <div className="mt-2">Sale Now</div>
 </h2>
 <p className="text-lg font-medium text-black mt-6 leading-relaxed">
 Spend minimal $100 get 30% off voucher code for your next purchase
 </p>
 <p className="text-sm text-black mt-2">
 1 June - 10 June 2021 <br /> *Terms & Conditions apply
 </p>
 <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg uppercase font-semibold hover:bg-gray-800">
 Shop Now
 </button>
 </div>
 </div>
 );
}