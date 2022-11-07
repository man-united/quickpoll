import NavigationBar from './components/NavigationBar';
function App() {
  var href = window.location.href;
  var path = window.location.pathname;
  alert('href: ' + href);
  alert('path: ' + path);

  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">Welcome to quickpoll</header>
    </div>
  );
}

export default App;
