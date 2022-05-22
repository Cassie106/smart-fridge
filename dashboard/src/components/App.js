import background from '../images/background2.jpeg'
import { render } from 'react-dom';
import {Image} from 'react-bootstrap';

export default function App() {
  return (
      <div>
        <div className=''>

        </div>
        <img src={background} className="img-fluid" alt="BackGround" />
        <h1 class="text-center">Fresh Bank</h1>
        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
        >
          {/*<Link to="/database">Database</Link>*/}
          <a type="button" className="btn btn-success" alt="dbButton" href='/database'>Check Database</a>
        </nav>
      </div>
  );
}

// var App = React.createClass ( {
//   render() {
//     var background = {backgroundSize : 'cover'};
//     var textStyle = {
//       position: 'absolute',
//       top: '50%',
//       left: '50%'
//     };
//
//     return (
//         <div style={{width: 'auto'}}>
//           <Image
//               style={background} responsive
//               src="http://www.milkbardigital.com.au/wp-content/uploads/2015/11/Milkbar-Home-Background.jpg">
//           </Image>
//           <h1 style={textStyle}>Text over image</h1>
//         </div>
//     );
//   }
// });


render(<App />, document.getElementById('root'));



