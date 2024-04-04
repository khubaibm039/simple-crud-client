import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);
        fetch(`http://localhost:7000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("data updated successful");
                }
            });
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
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;
