import { Fragment } from 'react'
import './App.less';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Login from './pages/login'
import Home from './pages/home/index'

function App() {
  return (
    <Fragment>
      <div className="App">
        <Home />
        {/* <header className="App-header">
          <h1>智慧曲沃建设(建设)</h1>
          <Button type="primary">按钮</Button>
        </header> */}
      </div>
    </Fragment>
  );
}

export default App;
