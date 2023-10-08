import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const cat1 = 'http://jjal.today/data/file/gallery/2581915065_tdY75w8y_e2541a0d81ce92d2e1595851a1d0c5abc0b1c3a2.jpeg'
  const cat2 = 'https://dispatch.cdnser.be/wp-content/uploads/2018/11/7e3e6d6fbda0c727194b1abf8607d154.png'
  const [imgCat, setImgCat] = useState()

  const catClick = (res)=>{
    if(res === '네'){
      setImgCat(cat1)
    }
    else if(res ==='아니요'){
      setImgCat(cat2)
    }

  }

  const div_style = {
    backgroundImage : `url(${imgCat})`,
    backgroundSize : 'cover',
    margin : '0 auto',
    marginTop : '20px',
    width : '300px',
    height : '300px'
  }

  return (
    <div className='main'>
      <h1>화원이는 바보라는 것에 인정하시나요?</h1>
      <div>
        <button style={{marginRight:'10px'}} onClick={()=>catClick('네')}>네</button>
        <button onClick={()=>catClick('아니요')}>아니요</button>
        <div style={div_style}>

        </div>
      </div>
    </div>
  );
}

export default App;
