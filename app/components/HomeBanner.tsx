import Image from "next/image";

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-500 to-purple-700 mb-8 rounded-2xl" >
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 text-center">
                    <h1 className="sizes= max-width: 768px text-4xl md:text-6xl font-bold text-white mb-4">Winter Sale</h1>
                    <p className="text-lg md:text-xl text-white mb-2">Enjoy  discounts on selected  items</p>
                    <p className="text-2xl md:text-5xl text-yellow-400 font-bold">Flat 35% OFF</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image
                        src="/br.png"
                        fill
                        alt="Banner image"
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    />


                </div>
            </div>
        </div>


    );
}

export default HomeBanner;