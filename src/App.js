import DataFetching from './APIcomponents/DataFetching';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import CounterOne from './reducers/CounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <DataFetching /> */}
      <CounterOne />

    </div>
  );
}

export default App;
