import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  return (
    <>
      <div className="h-[700px] relative">
        <div className="absolute inset-0 bg-[url('/bg3.jpg')] bg-cover bg-center bg-top"></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
      <div className=" w-[80%] mx-auto py-6">
        <div className="w-full text-center">
        <p className="font-bold text-3xl py-6 ">Featured Products </p>
        </div>
        <div className="flex flex-wrap flex-1 gap-3 justify-center">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>

      </div>
      <div>
        <Testimonial/>
      </div>
      <div className="w-full">
      <Newsletter/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

