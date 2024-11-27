import React from 'react';
import Layout from '../Layout';
import OrderCard from '@/Components/OrderCard/OrderCard';

const Orders = () => {
  return (
    <Layout>
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Orders</h2>
        <p className="text-gray-600">View and manage customer orders here.</p>
        <ul className="mt-4 space-y-2">
            <OrderCard orderId="12345" status="Shipped" />
            <OrderCard orderId="12346" status="Processing" />
            <OrderCard orderId="12347" status="Delivered" />
        </ul>
    </div>
    </Layout>
  );
};

export default Orders;
