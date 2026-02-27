import { useState, useEffect } from 'react'

function User() {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUser() {
            try {
                const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const userData = await userResponse.json();
                setUser(userData);
            }
            catch(err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        getUser();
    }, [])

  if (loading) 
    return <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>Loading...</div>

  if (error) 
    return <div>{error}</div>

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>
        <div>
            <h3>{user.name}</h3>
            <h3>{user.phone}</h3>
        </div>
    </div>
  )
}

export default User