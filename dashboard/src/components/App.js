import background from '../images/bg.png'
import { render } from 'react-dom';
import '../styles/App.css';

export default function App() {
  return (
      <div>
        <div className="container">
            <img src={background} alt="BackGround\"/>
            <h1 className="title">Fresh Bank</h1>
            <nav
                style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                }}
            >
              <a type="button" className="btn btn-success checkDB" alt="dbButton" href='/database'>Database</a>
              <a type="button" className="btn btn-success dashboard" alt="dashboardButton" href='/dashboard'>Dashboard</a>
            </nav>
        </div>
      </div>
  );
}

render(<App />, document.getElementById('root'));



