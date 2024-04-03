import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
    };

    return (
        <div>
            <h1>Update Information of {loadedUser.name}</h1>
            <div>
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        name="name"
                        defaultValue={loadedUser?.name}
                        id=""
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        defaultValue={loadedUser?.email}
                        id=""
                    />
                    <br />
                    <input type="button" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;
