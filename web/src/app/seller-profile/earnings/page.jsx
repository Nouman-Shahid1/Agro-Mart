import React from 'react';
import Layout from '../Layout';

const Earnings = () => {
  return (
    <Layout>
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Earnings</h2>
        <p className="text-gray-600">Track your earnings and payouts here.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            <div className="bg-green-200 p-6 rounded-lg shadow-xl transition duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-green-800">Monthly Earnings</h4>
                <p className="text-xl font-bold text-green-700">$3,000</p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-xl transition duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-green-800">Yearly Earnings</h4>
                <p className="text-xl font-bold text-green-700">$36,000</p>
            </div>
           
        </div>
    </div>
    </Layout>
  );
};

export default Earnings;
