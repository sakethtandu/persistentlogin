import {AsyncStorage} from 'react-native';

class App extends Component {

  constructor() {
    super();
    this.state = { hasToken: false };
  }

  componentWillMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null })
    })
  }

  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene component={Authentication} initial={!this.state.hasToken}
            (...)
          />
          <Scene
            component={HomePage}
            initial={this.state.hasToken}
            (...)
          />
        </Scene>
      </Router>
    )
  }
}