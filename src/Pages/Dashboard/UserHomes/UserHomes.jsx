import useAuth from "../../../hook/useAuth";

const UserHomes = () => {
    const {user} = useAuth();
    return (
        <div>
               <h2>
                <span>Hi, Welcome </span>
                {
                    user.displayName ? user.displayName : 'Back'
                }
            </h2>

        </div>
    );
};

export default UserHomes;