import { useState } from 'react';
import './VakansiyaFilter.scss'
import VakansiyaFilterData from './VakansiyaFilterData';
import VakansiyaFilterPost from './VakansiyaFilterPost';
const VakansiyaFilter = () => {
    const [btnAdd, setBtnAdd] = useState(false);
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
        <div className="modal-form-btn">
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