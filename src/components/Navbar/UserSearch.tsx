import {useState, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import Input from "../Input/Input.tsx"
import {fetchUsersRequest} from "../../store/users/actions.ts";
import {User} from "../../store/users/types.ts";
import {useNavigate} from "react-router-dom";

const UserSearch = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user.users); // Assuming users are in the `user` slice

    const [isTyping, setIsTyping] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const input = document.getElementById("people-search") as HTMLInputElement;

        if (input) {
            const handleBlur = () => {
                setTimeout(() => {
                    setIsTyping(false);
                }, 200); // Delay by 200ms
            };
            const handleFocus = () => {
                setIsTyping(true);
            };

            input.addEventListener("blur", handleBlur);
            input.addEventListener("focus", handleFocus);

            return () => {
                input.removeEventListener("blur", handleBlur);
                input.removeEventListener("focus", handleFocus);
            };
        }
    }, []);

    useEffect(() => {
        let debounceTimeout: number;
        if (searchQuery) {
            debounceTimeout = setTimeout(() => {
                dispatch(fetchUsersRequest(searchQuery)); // Dispatch Redux action with query
            }, 300); // Adjust debounce delay as needed
        }

        return () => {
            if (debounceTimeout) clearTimeout(debounceTimeout);
        };
    }, [searchQuery, dispatch]);

    const navigateToProfile = (id:string) => navigate('/profile/'+id)
    return (
        <div className="relative flex-grow">
            <Input
                icon="fas fa-search"
                name="people-search"
                className="rounded-xl bg-white bg-opacity-[60]"
                type="text"
                labelText=""
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                formik={false}
            />
            {isTyping && (
                <div className="absolute py-2 border-2 border-gray rounded-xl w-full bg-white left-0 ease-in-out">
                    <h3 className="px-4 text-lg font-semibold">Recent</h3>
                    <hr/>
                    {users.length > 0 ? (
                        <ul>
                            {users.map((user: User) => (
                                <li
                                    key={user._id}
                                    className="flex items-center space-x-3 py-3 px-4 cursor-pointer bg-transparent hover:bg-[rgba(0,0,0,0.1)] transition-colors duration-100 ease-in-out"
                                    onClick={()=>navigateToProfile(user._id)}
                                >
                                    <i className="fas fa-search"></i>
                                    <p>
                                        <strong>{user.name}</strong>
                                        &nbsp;&bull;&nbsp;{user?.company?.name}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="mt-3">
                            <li className="flex items-center space-x-3 py-3 px-4 cursor-pointer bg-transparent hover:bg-[rgba(0,0,0,0.1)] transition-colors duration-100 ease-in-out">
                                <i className="fas fa-clock"></i>
                                <p>
                                    <strong>Nurlan Baitassov</strong>
                                </p>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserSearch;
