import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <section className="bg-[#F4F6F5] mt-10 ml-10 mr-10 px-4 py-0 lg:flex lg:items-center lg:justify-between rounded-md">
        <div className="relative lg:-mt-36 ml-6">
          <h1 className="text-5xl font-bold">
            <span className="bg-[#FFFFFF] px-4 py-1 inline-block -rotate-2 transform">
              LET&#39;S
            </span>
            <br />
            EXPLORE
            <br />
            <span className="bg-[#EBD96B] px-4 py-1 text-white inline-block -rotate-2 transform">
              UNIQUE
            </span>
            <br />
            CLOTHES.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Live for influential and innovative fashion!
          </p>
          <button className="mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-700">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/hero.img.png"
            alt="Fashion Model"
            width={871}
            height={784}
          />
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="bg-[#EBD96B] mt-10 px-4 py-6">
        <div className="flex flex-wrap justify-around gap-6 md:gap-10">
          <Image
            src="/images/h&m.img.png"
            alt="H&M"
            width={118.26}
            height={69.51}
          />
          <Image
            src="/images/obey.img.png"
            alt="Obey"
            width={150}
            height={52.67}
          />
          <Image
            src="/images/shopify.img.png"
            alt="Shopify"
            width={176}
            height={61.8}
          />
          <Image
            src="/images/lacoste.img.png"
            alt="Lacoste"
            width={235}
            height={69.96}
          />
          <Image
            src="/images/levis.img.png"
            alt="Levi's"
            width={127}
            height={70.68}
          />
          <Image
            src="/images/amazon.img.png"
            alt="Amazon"
            width={166}
            height={63}
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
