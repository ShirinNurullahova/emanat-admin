import React, {useEffect , useState} from 'react';
import axios from 'axios';
import ReklamHead from './ReklamHead/ReklamHead';
import ReklamSections from './ReklamSections/ReklamSections';

const PartnershipReklam = () => {
    const [initialValuesHead, setInitialValuesHead] = useState(null)
const [initialValuesSection1 , setInitialValuesSection1]= useState(null);
const [initialValuesSection2 , setInitialValuesSection2]= useState(null)
const [initialValuesSection3 , setInitialValuesSection3]= useState(null)
const [initialValuesSection4 , setInitialValuesSection4]= useState(null)
const [initialValuesSection5 , setInitialValuesSection5]= useState(null)
const [initialValuesSection6 , setInitialValuesSection6]= useState(null)
    const fetchData = () => {
        
        axios.get((`${process.env.REACT_APP_URL}/admin/marketing/reklam/head`))
            .then(res => {
                console.log(res)
                setInitialValuesSection1(res.data.message.dtoHead[0].sections[0])
                setInitialValuesSection2(res.data.message.dtoHead[0].sections[1])
                setInitialValuesSection3(res.data.message.dtoHead[0].sections[2])
                setInitialValuesSection4(res.data.message.dtoHead[0].sections[3])
                setInitialValuesSection5(res.data.message.dtoHead[0].sections[2])
                setInitialValuesSection6(res.data.message.dtoHead[0].sections[3])
                setInitialValuesHead(res.data.message.dtoHead[0])
            })
            .catch((err) =>{});
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <ReklamHead initialValues={initialValuesHead}/>
        <ReklamSections initialValues={initialValuesSection1}/>
        <ReklamSections initialValues={initialValuesSection2}/>
        <ReklamSections initialValues={initialValuesSection3}/>
        <ReklamSections initialValues={initialValuesSection4}/>
        <ReklamSections initialValues={initialValuesSection5}/>
        <ReklamSections initialValues={initialValuesSection6}/>
    </div>
  )
}

export default PartnershipReklam