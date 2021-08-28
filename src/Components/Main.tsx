// import AnchorToCirculo from "./AnchorToCirculo"
// import CirculoToDmc from "./CirculoToDmc"
// import AnchorToDmc from "./AnchorToDmc"
// import { Box } from "@material-ui/core"
import { Provider } from 'react-redux'
import store from '../store'
import Content from './Content';
// import ComparisonBoxes from './ComparisonBoxes'
import Header from './Header'


const Main = () => {

  // const dispatch = useDispatch();
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Content />
      </div>

    </Provider>
  )
}

export default Main
