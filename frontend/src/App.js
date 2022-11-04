import NavigationBar from './components/NavigationBar';
function App() {
  var end = window.location.href;
  console.log(end);
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">Welcome to quickpoll</header>
    </div>
  );
}

export default App;
