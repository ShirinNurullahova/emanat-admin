import React, {useEffect , useState} from 'react';
import axios from 'axios';
import AnswerHead from './AnswerHead/AnswerHead';
import AnswerSections from './AnswerSections/AnswerSections';
import AnswerSectionsCreate from './AnswerSectionsCreate/AnswerSectionsCreate';

const CareerAnswer = () => {
    const [initialValuesHead, setInitialValuesHead] = useState(null)
const [initialValuesSection , setInitialValuesSection]= useState(null);
const [id,setId]=useState('')
    const fetchData = () => {
        
        axios.get((`${process.env.REACT_APP_URL}/admin/career/answers/head`))
            .then(res => {
                setInitialValuesSection(res.data.message.dtoHead[0].sections)
                setInitialValuesHead(res.data.message.dtoHead[0])
                setId(res.data.message.dtoHead[0]?._id)
            })
            .catch((err) => {});
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
         <AnswerHead initialValues={initialValuesHead}/>
         <AnswerSectionsCreate initialValues={initialValuesSection} id={id}/>
         {initialValuesSection && (initialValuesSection.map((section)=>{
          return (
            <AnswerSections initialValues={section}/>
          )
         })
         )}
    </div>
  )
}

export default CareerAnswer