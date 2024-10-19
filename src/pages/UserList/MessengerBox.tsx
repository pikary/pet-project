import React, {useContext} from 'react';
import {User} from "../../store/users/types.ts"; // Adjust the import based on your project structure
import {UserContext} from "../../context/userContext.tsx";


interface UserContextType {
    users: User[];
    deleteUser: (id: number) => void;  // Add deleteUser function type
    editUser: (updatedUser: User) => void;  // Add editUser function type
}
interface MessengerProps{
    users:User[]
}
const MessengerBox: React.FC<MessengerProps> = ({users}) => {

    return (
        <div
            className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 w-72 h-96 overflow-y-auto"> {/* Set height to 400px (96 * 4px = 384px) */}
            <h2 className="text-lg font-bold mb-2">Users</h2>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="border-b pb-2">
                        <p className="text-blue-600">{user.name}</p>
                        <p className="text-gray-600">{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessengerBox;
