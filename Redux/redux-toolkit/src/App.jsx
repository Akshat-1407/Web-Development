import NormalDeltaCounter from "./Components/counter/NormalDeltaCounter";
import ReduxDeltaCounter from "./Components/counter/ReduxDeltaCounter";
import NormalCounter from "./Components/counter/NormalCounter";
import ReduxCounter from "./Components/counter/ReduxCounter";

import User from "./Components/async-redux/User";
import ReduxUser from "./Components/async-redux/ReduxUser";

function App() {
  return ( <div>
    {/* <NormalCounter/> */}
    {/* <ReduxCounter/> */}
    {/* <NormalDeltaCounter/> */}
    {/* <ReduxDeltaCounter/> */}
    {/* <User/> */}
    <ReduxUser/>
  </div>

  )
}

export default App;