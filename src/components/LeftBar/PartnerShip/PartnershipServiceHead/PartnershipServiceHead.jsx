import React, {useEffect , useState} from 'react';
import axios from 'axios';
import ServiceHead from './ServiceHead/ServiceHead';
import ServiceSections from './ServiceSections/ServiceSections';

const PartnershipServiceHead = () => {
    const [initialValuesHead, setInitialValuesHead] = useState(null)
const [initialValuesSection1 , setInitialValuesSection1]= useState(null);
const [initialValuesSection2 , setInitialValuesSection2]= useState(null)
const [initialValuesSection3 , setInitialValuesSection3]= useState(null)
const [initialValuesSection4 , setInitialValuesSection4]= useState(null)
    const fetchData = () => {
        
        axios.get((`${process.env.REACT_APP_URL}/admin/marketing/service/head`))
            .then(res => {
                console.log(res);
                setInitialValuesSection1(res.data.message.dtoHead[0].sections[0])
                setInitialValuesSection2(res.data.message.dtoHead[0].sections[1])
                setInitialValuesSection3(res.data.message.dtoHead[0].sections[2])
                setInitialValuesSection4(res.data.message.dtoHead[0].sections[3])
                setInitialValuesHead(res.data.message.dtoHead[0])
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <ServiceHead initialValues={initialValuesHead}/>
        <ServiceSections initialValues={initialValuesSection1}/>
        <ServiceSections initialValues={initialValuesSection2}/>
        <ServiceSections initialValues={initialValuesSection3}/>
        <ServiceSections initialValues={initialValuesSection4}/>
    </div>
  )
}

export default PartnershipServiceHead