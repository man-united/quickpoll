import NavigationBar from './components/NavigationBar';
function App() {
  console.log(window.location.href);
  console.log('hello');
  console.log(window.location.pathname);
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">Welcome to quickpoll</header>
    </div>
  );
}

export default App;
