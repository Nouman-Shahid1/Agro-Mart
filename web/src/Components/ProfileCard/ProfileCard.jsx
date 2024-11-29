const ProfileCard = ({ title, value }) => (
    <div className="bg-green-100 p-6 rounded-lg shadow-xl transition duration-300 hover:scale-105">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        <p className="text-xl font-bold text-green-700 mt-2">{value}</p>
    </div>
);
export default ProfileCard