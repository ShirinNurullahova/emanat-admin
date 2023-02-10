import React, {useEffect , useState} from 'react';
import axios from 'axios';
import WorkWithHead from './PartnershipWorkwithHead/PartnershipWorkwithHead';
import WorkWithSections from './PartnershipWorkwithSections/PartnershipWorkwithSections';

const PartnershipWorkWith = () => {
    const [initialValuesHead, setInitialValuesHead] = useState(null)
const [initialValuesSection1 , setInitialValuesSection1]= useState(null);
const [initialValuesSection2 , setInitialValuesSection2]= useState(null)
const [initialValuesSection3 , setInitialValuesSection3]= useState(null)
    const fetchData = () => {
        
        axios.get((`${process.env.REACT_APP_URL}/admin/marketing/work-with/head`))
            .then(res => {
                setInitialValuesSection1(res.data.message.dtoHead[0].sections[0])
                setInitialValuesSection2(res.data.message.dtoHead[0].sections[1])
                setInitialValuesSection3(res.data.message.dtoHead[0].sections[2])
                setInitialValuesHead(res.data.message.dtoHead[0])
            })
            .catch((err) => {});
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <WorkWithHead initialValues={initialValuesHead}/>
        <WorkWithSections initialValues={initialValuesSection1}/>
        <WorkWithSections initialValues={initialValuesSection2}/>
        <WorkWithSections initialValues={initialValuesSection3}/>
    </div>
  )
}

export default PartnershipWorkWith