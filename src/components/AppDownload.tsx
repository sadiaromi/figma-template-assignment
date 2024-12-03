import Image from "next/image";

export default function AppDownload() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 bg-[#FFFFFF]">

    {/* Left Text Section */}
    <div className="space-y-4 text-center md:text-left mt-4 ml-10">
    <h2 className="text-3xl md:text-4xl font-extrabold">
    Download App & <br /> Get the Voucher!
    </h2>
    <p className="text-gray-700 text-lg">
    Get 30% off for your first transaction using <br /> Rondovision mobile app for now.
    </p>
    <div className="flex justify-center md:justify-start space-x-4 mt-4">
    <Image
    src="/images/appstore.img.png"
    alt="App Store"
    width={204}
    height={71}
    />
    <Image
    src="/images/google-play.img.png"
    alt="Google Play"
    width={204}
    height={71}
    />
    </div>
    </div>
   
    {/* Right Image Section */}
    <div className="flex justify-center mt-8 md:mt-0">
    <Image
    src="/images/download.img.png"
    alt="App Mockup"
    width={637}
    height={629}
    />
    </div>
    </div>
    );
   }
   
   