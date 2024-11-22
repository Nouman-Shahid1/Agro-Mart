import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Benifits from "@/components/Benifits";
import { GiBarbedSpear } from "react-icons/gi";
import Logo from "../assets/images/logo.png";
export default function Page() {
  return (
    <>
      <div className="h-screen relative overflow-hidden font-sans">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50"
          style={{
            backgroundImage:
              "url('https://images6.alphacoders.com/134/thumb-1920-1347850.png')",
          }}
        ></div>

        {/* Animated Overlays */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-bounce-slow-reverse"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-30">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative mt-28 z-20 flex flex-col items-center justify-center h-full text-center px-6 space-y-12">
          {/* Floating Icons */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-green-400 rounded-full blur-lg opacity-50 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-500 rounded-full blur-lg opacity-30 animate-pulse"></div>

          {/* Dynamic Tagline Section */}
          <div className="flex items-center justify-center space-x-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 animate-fade-in">
              Revolutionizing Agriculture 🌱
            </h2>
          </div>

          {/* Main Header */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl animate-slide-in">
            Welcome to{" "}
            <span className="text-green-400 underline decoration-wavy">
              AgroMart
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed drop-shadow-md animate-fade-in-delayed">
            Revolutionizing agriculture with innovative solutions, premium
            tools, and sustainable practices. Let’s cultivate a thriving future
            for farmers and the planet.
          </p>

          {/* Enhanced Separator */}
          <div className="flex items-center space-x-6">
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase animate-bounce">
              Empowering Farmers Globally
            </span>
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-16 rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:shadow-green-500/50 animate-fade-up">
              Shop Products
            </button>
            <button className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold py-4 px-16 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-green-500/50 animate-fade-up-delayed">
              Learn More
            </button>
          </div>
        </div>

        {/* Gradients for Style */}
        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Featured Products  */}
      <div className="w-[80%] mx-auto py-12">
        <div className="w-full text-center">
          <p className="font-bold text-3xl text-[#1fb025]">Featured Products</p>
          <p className="-mt-4 mb-6">
            <GiBarbedSpear
              size={40}
              className="w-full py-2 h-[60px] -mt-2"
              style={{ transform: "rotate(310deg)", color: "#1fb025" }}
            />
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <ProductCard src="https://img.freepik.com/free-photo/close-up-box-with-vegetables-hands-mature-man_329181-4600.jpg?t=st=1732103540~exp=1732107140~hmac=fd69a316e63c80f87c6c6c1aced72256b8e40a3d454e0ac94b740b6ce4f9d28d&w=1060" />
          <ProductCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJPsEXB2wfWSZD5DAD98sHzPct0q1JAAkZQ&s" />
          <ProductCard src="https://in.thedollarbusiness.com/assets/articles/2015/12/shutterstock_231916573_650.jpg" />
          <ProductCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_nIaZR3vC-_Yz5NKSlYYsE26XSVCaWAlww&s" />
        </div>
      </div>

      {/* Featured Categories */}
      <div className="w-[80%] mx-auto pb-12">
        <div className="w-full text-center">
          <p className="font-bold text-3xl text-[#1fb025] pt-6">
            Featured Categories
          </p>
          <p className="-mt-4 mb-6">
            <GiBarbedSpear
              size={40}
              className="w-full py-2 h-[60px] -mt-2"
              style={{ transform: "rotate(310deg)", color: "#1fb025" }}
            />
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <CategoryCard
            name="Fertilizer"
            src="https://image.made-in-china.com/202f0j00zlprGMCoYkqP/Herbicide-Bensulfuron-Methyl-10-Bentazole-45-Wp-Hot-Sales-Keep-Grass-Products.webp"
            description="Enhance crop growth and maximize yield with premium fertilizers."
          />
          <CategoryCard
            name="Pesticide"
            src="https://image.made-in-china.com/2f0j00RfLqdFvkCgpV/Best-Selling-Agriculture-Pesticides-Emamectin-Benzoate-Abamectin-Insektisida-Abamectin-95-Tc-1-8c.webp"
            description="Protect crops from pests with our effective pesticides."
          />
          <CategoryCard
            name="Farm Machinery"
            src="https://image.made-in-china.com/2f0j00gvHqFsQlEhbe/Agricultural-Machine-and-Farm-Equipment-Rice-Wheat-Combine-Harvester.webp"
            description="Modern farm machinery to make your work easier and more efficient."
          />
          <CategoryCard
            name="Seeds"
            src="https://i.brecorder.com/large/2024/03/6604aab2bf8c4.jpg"
            description="High-quality seeds for sustainable and productive farming."
          />
        </div>
      </div>

      {/* Benefits  */}
      <div>
        <Benifits />
      </div>

      {/* Testimonials */}
      <div>
        <Testimonial />
      </div>

      {/* Newsletter  */}
      <div className="w-full">
        <Newsletter />
      </div>

      {/* Footer Section */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
