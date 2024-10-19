import React, {ComponentType, FC, useContext} from 'react';
import { UserContext } from '../../context/userContext.tsx';
import {User} from "../../store/users/types.ts"; // Assuming UserProvider file

//пропсы для родителя
export interface WrapperProps {
    name: string;
}

//пропсы для детей
export interface WrapperForWrappedProps {
    users: User[];
    deleteUser: ((id: string) => void) | undefined;  // Add deleteUser function type
    editUser: ((updatedUser: User) => void) | undefined;  // Add editUser function type

}


export function WithHoc<WrappedProps>(WrappedComponent: ComponentType<WrappedProps & WrapperForWrappedProps >): FC<WrappedProps & WrapperProps>{



    const WrapperComponent: FC<
        WrappedProps & WrapperProps
    > = (props) => {
        console.log('Props roditelya: ' + props.name);
        const context = useContext(UserContext)
        const { ...wrappedOnlyProps } = props;

        const wrappedFullProps = {
            users:context?.users || [],
            deleteUser:context?.deleteUser ,
            editUser:context?.editUser ,
            ...((wrappedOnlyProps as unknown) as WrappedProps),
        };

        return <WrappedComponent {...wrappedFullProps} />;
    };


    return WrapperComponent;

}

export default WithHoc;
