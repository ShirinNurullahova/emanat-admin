import { useState } from 'react';
import './VakansiyaFilter.scss'
import VakansiyaFilterData from './VakansiyaFilterData';
import VakansiyaFilterPost from './VakansiyaFilterPost';
const VakansiyaFilter = () => {
    const [btnAdd, setBtnAdd] = useState(false);
    var body = document.getElementsByTagName('body')[0];

  if (btnAdd) {
      body.style.overflow = 'hidden'
  } else {
      body.style.overflow = 'visible'

  }
    return ( 
        <div className='vakansiyaFilter'>
        <div className="middle-main-comp">
          <div className="middle-main-comp-p">
            <p>Vakansiya Filter</p>
          </div>
          <div className="middle-main-comp-bottom">
            <p>/ data</p>
          </div>
        </div>
        <div className="vakansiyafilter-btn">
            <button onClick={()=>setBtnAdd(true)}>Əlavə et</button>
        </div>
        {
            btnAdd && <VakansiyaFilterPost setBtnAdd={setBtnAdd} />
        }
        {
            <VakansiyaFilterData/>
        }
    </div>
     );
}
 
export default VakansiyaFilter;