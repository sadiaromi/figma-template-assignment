import Image from "next/image";

const Favorites = () => (
    <section className="container mx-auto my-8 ml-100px ">
         <Image 
        src={"/images/youngfavourite.logo.png"}
        alt="New Arrival"
        width={511}
        height={63.96}/>

    <div className="grid grid-cols-2 gap-4 ml-100px">
    <div className="mt-14 ml-4">
    <Image 
        src={"/images/fav-1.png"}
        alt="New Arrival"
        width={835}
        height={679}/>

    </div>
    <div className="mt-14 ml-4">
    <Image 
        src={"/images/fav-2.png"}
        alt="New Arrival"
        width={838}
        height={678}/>

    </div>
    </div>
    </section>
   );
   
   export default Favorites;
   
   