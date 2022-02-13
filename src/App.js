import './App.css';
import img from './imageInSrc.jpg'
import './Style.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
       <h1 className="title red">Yassine Chatti</h1>
  </div>
      </header>
      <div>
      <img src={img} ></img> 
  <img src='imageInPublic.jpg'></img>
  </div>
    </div>
  );
}

export default App;
