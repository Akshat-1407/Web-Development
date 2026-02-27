import { useEffect } from "react";
import fetchUserMiddleware from "../../fetchUserMiddleware";
import { useSelector, useDispatch } from "react-redux";

function ReduxUser() {

  const {user, loading, error} = useSelector((store) => { return store.userState });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserMiddleware(4));
  }, [])

  if (loading) {
    return <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: "100vw"}}>
        <div>
            <h3>{user.name}</h3>
            <h3>{user.phone}</h3>
        </div>
    </div>
  )
}

export default ReduxUser;
