import { useEffect , useState } from 'react';
export const CatagoryMenu = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = "https://server1-six-navy.vercel.app/";
        const fetchData = async() => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setUsers(json);
        } catch (error) {
            console.log("error", error);
        }
        };
        fetchData();
    }, []);
    return(
        <select>
        {
            users.map((user,index) => {
                return(
                    <option key={index} id={user._id}>{user.catagory}</option>
                )
            })
        }
        </select>
    )
}