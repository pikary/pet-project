import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { User } from "../../store/users/types.ts";

interface UserListProps {
    users: User[];
    deleteUser: (id: number) => void; // ID is a number
    editUser: (updatedUser: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, deleteUser, editUser }) => {
    const [other,setOther]= useState(false)
    const [filter, setFilter] = useState<string>('');
    const [editUserId, setEditUserId] = useState<number | null>(null); // Change to number
    const [editedName, setEditedName] = useState<string>('');

    // const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
    }, [users, filter]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const handleDeleteUser = (id: number) => {
        deleteUser(id);
    }

    const handleEditClick = (user: User) => {
        setEditUserId(user.id! ); // Use the number ID
        setEditedName(user.name); // Pre-fill the input with the current name
    };

    const handleSaveEdit = () => {
        if (editUserId !== null) {
            const updatedUser: User | undefined = users.find(user => user.id === editUserId);
            if (updatedUser) {
                editUser({ ...updatedUser, name: editedName }); // Update user with new name
                setEditUserId(null); // Reset edit state
                setEditedName(''); // Clear the input
            }
        }
    };

    useEffect(() => {
        console.log('Filtered users changed');
    }, [filteredUsers]);

    return (
        <div className="container mx-auto p-6">
            <button onClick={()=>{setOther(!other)}}>click</button>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Filter users by name"
                className="mb-6 p-2 border border-gray-300 rounded-lg"
            />

            <ul className="space-y-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <li key={user.id} className="p-4 bg-white shadow-md rounded-lg relative">
                            <div className="flex flex-col space-y-2">
                                {editUserId === user.id ? (
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                            className="p-2 border border-gray-300 rounded-lg"
                                        />
                                        <button
                                            onClick={handleSaveEdit}
                                            className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
                                        <p className="text-gray-600">Email: {user.email}</p>
                                        <p className="text-gray-600">Phone: {user.phone}</p>
                                        {user.address && (
                                            <p className="text-gray-600">
                                                Address: {user.address.street}, {user.address.city}
                                            </p>
                                        )}
                                        {/* Edit Button */}
                                        <button
                                            onClick={() => handleEditClick(user)}
                                            className="absolute top-2 right-16 text-blue-500 hover:text-blue-700"
                                        >
                                            Edit
                                        </button>
                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDeleteUser(user.id)}
                                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="text-center text-gray-500">No users available</li>
                )}
            </ul>
        </div>
    );
};

export default UserList;
