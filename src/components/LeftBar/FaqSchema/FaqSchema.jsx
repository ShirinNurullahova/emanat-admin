import './FaqSchema.scss'
import { useState } from 'react';
import FaqSchemaPost from './FaqSchemaPost';
import FaqSchemaData from './FaqSchemaData';
const FaqSchema = () => {
    const [btnAdd, setBtnAdd] = useState(false);
    return ( 
      <div className='faqSchema'>
        <div className="middle-main-comp">
          <div className="middle-main-comp-p">
            <p>Faq Schema</p>
          </div>
          <div className="middle-main-comp-bottom">
            <p>/ data</p>
          </div>
        </div>
        <div className="vakansiyafilter-btn">
            <button onClick={()=>setBtnAdd(true)}>Əlavə et</button>
        </div>
        {
            btnAdd && <FaqSchemaPost setBtnAdd={setBtnAdd} />
        }
       { 
            <FaqSchemaData/>
        }
    </div>
     );
}
 
export default FaqSchema;