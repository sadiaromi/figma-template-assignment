import Image from "next/image";

const NewArrivals = () => (
    <section className="container mx-auto my-8">
<div className=" ml-8 mt-100">
<Image 
src={"/images/newarrival-logo.png"}
alt="New Arrival"
width={411}
height={57.94}
/>
</div>

    <div className="grid grid-cols-3 gap-6">
    <div className="ml-8 mt-14">
        <Image 
        src={"/images/hoodie.jpg"}
        alt="New Arrival"
        width={484}
        height={704}/>

    </div>
    <div className="ml-8 mt-14">
    <Image 
        src={"/images/hoodie-2.png"}
        alt="New Arrival"
        width={484}
        height={704}/>
    </div>
    <div className="ml-8 mt-14">
    <Image 
        src={"/images/hoodie-3.png"}
        alt="New Arrival"
        width={490}
        height={704}/>
    </div>
    </div>
    </section>
   );
   
   export default NewArrivals;
   
   