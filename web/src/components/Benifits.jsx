import Link from "next/link";
import { FaSeedling, FaLeaf, FaMapMarkerAlt, FaRecycle, FaClipboardList, FaHeartbeat } from 'react-icons/fa';

const Benefits = () => {
  return (
    <section className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Why Choose AgroMart?
          <span className="block text-xl mt-2 text-gray-500">Fresh, Organic, and Sustainable: The AgroMart Promise</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 text-green-500">
              <FaSeedling size={50} className="mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Fresh from Farms</h3>
            <p className="text-gray-600">
              Harvested daily, delivered fresh—our products come straight from the farm to your table, ensuring quality and taste you can trust.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="mb-6  text-green-500">
              <FaLeaf size={50}  className="mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">100% Organic</h3>
            <p className="text-gray-600">
              We are committed to providing you with 100% organic produce—no pesticides, no artificial additives—just pure, wholesome goodness.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 text-green-500">
              <FaMapMarkerAlt size={50} className="mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Locally Sourced</h3>
            <p className="text-gray-600">
              Supporting local farmers while ensuring the freshest products, we proudly source all our goods from nearby farms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 text-green-500">
              <FaRecycle size={50} className="mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Eco-Friendly Packaging</h3>
            <p className="text-gray-600">
              Our eco-friendly packaging is made from sustainable materials, reducing waste and promoting a healthier planet.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 text-green-500">
              <FaClipboardList size={50} className="mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Farm-to-Table Traceability</h3>
            <p className="text-gray-600">
              With full traceability from the farm to your table, you can be sure of the quality and origins of every product.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 text-green-500">
              <FaHeartbeat size={50} className="mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Healthy & Nutrient-Rich</h3>
            <p className="text-gray-600">
              Packed with essential nutrients and vitamins, our organic products are the healthy choice for you and your family.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link href="#shop-now" className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 hover:bg-green-600">
            Shop Fresh Produce
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
