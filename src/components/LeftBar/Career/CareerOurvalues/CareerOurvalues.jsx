import React, {useEffect , useState} from 'react';
import axios from 'axios';
import OurvaluesHead from './OurValuesHead/OurValuesHead';
import OurvaluesSections from './OurvaluesSections/OurvaluesSections';

const CareerOurvalues = () => {
    const [initialValuesHead, setInitialValuesHead] = useState(null)
const [initialValuesSection1 , setInitialValuesSection1]= useState(null);
const [initialValuesSection2 , setInitialValuesSection2]= useState(null)
const [initialValuesSection3 , setInitialValuesSection3]= useState(null)
    const fetchData = () => {
        
        axios.get((`${process.env.REACT_APP_URL}/manager/career/our-values/head`))
            .then(res => {
                setInitialValuesSection1(res.data.dtoHead[0].sections[0])
                setInitialValuesSection2(res.data.dtoHead[0].sections[1])
                setInitialValuesSection3(res.data.dtoHead[0].sections[2])
                setInitialValuesHead(res.data.dtoHead[0])
            })
            .catch((err) => {});
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <OurvaluesHead initialValues={initialValuesHead}/>
        <OurvaluesSections initialValues={initialValuesSection1}/>
        <OurvaluesSections initialValues={initialValuesSection2}/>
        <OurvaluesSections initialValues={initialValuesSection3}/>
    </div>
  )
}

export default CareerOurvalues