import axios from "axios";


export const getLists = async () => {
    console.log("Inside func");
    await axios.get("https://reqres.in/api/users?page=2")
        .then(res =>
            console.log("resulttrtttttttttttttttt", res)
        )
        .catch(console.log);
}
