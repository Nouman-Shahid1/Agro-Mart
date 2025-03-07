"use client";

const CreateSeed = ({ showAddSeed, setShowAddSeed }) => {
  const handleAddSeed = () => {
    setShowAddSeed(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddSeed ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form className="relative max-w-4xl w-[530px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={handleAddSeed}
        >
          X
        </button>

        <h2 className="text-3xl font-bold text-center text-green-300">
          Add Seed
        </h2>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Seed Name</label>
          <input
            type="text"
            placeholder="Enter seed name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            placeholder="Enter seed description"
            rows="4"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          ></textarea>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Category</label>
          <select className="w-full p-3 bg-white bg-opacity-20 text-black rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all">
            <option className="bg-green-800" value="">Select category</option>
            <option className="bg-green-800" value="vegetables">Vegetables</option>
            <option className="bg-green-800" value="fruits">Fruits</option>
            <option className="bg-green-800" value="flowers">Flowers</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Seed Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Seed
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSeed;
