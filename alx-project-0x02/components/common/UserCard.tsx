import { UserProps } from '@/interfaces';
const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="flex items-center space-x-4 mb-4">
        <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 text-xl font-bold rounded-full border-2 border-indigo-300">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">User ID: {user.id}</p>
        </div>
      </div>
      
      <div className="space-y-2 text-gray-700">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-start">
          <svg className="w-5 h-5 mr-2 mt-1 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="text-sm">{fullAddress}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;