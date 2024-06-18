import { ToastContainer } from "react-toastify";
import State from "./1.State/State.jsx";
import Props from "./2.props/Props.jsx";
import LifeCycleCom from "./3.LifeCycle/Life-cycle.jsx";
import MapKey from "./3.Map-Key/Mapkey.jsx";
import ConditionRendering from "./5.ConditionalRendering/ConditionRendering.jsx";
import UseEffect from "./6.useEffect/UseEffect.jsx";
import InputCom from "./7.Input/InputCom.jsx";
import SimpleRouter from "./8.Router/SimpleRouter/SimpleRouter.jsx";

function App() {
  return (
    <div
      style={{ minWidth: "100vw" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      {/*<State />*/}
      {/*<Props />*/}
      {/*<MapKey />*/}
      {/*<LifeCycleCom />*/}
      {/* {<Counter />} */} {/* {?\<Lc />} */}
      {/* {<ConditionRendering />} */}
      {/* {<UseEffect />} */}
      {<InputCom />}
      {/* {<Com />} */}
      {/* <SimpleRouter /> */}
      <ToastContainer />
    </div>
  );
}
export default App;
