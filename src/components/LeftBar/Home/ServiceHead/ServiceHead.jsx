import React, {useEffect , useState} from 'react';
import axios from 'axios';
import MainHead from './MainHead/MainHead'
import MainIcons from './MainIcons/MainIcons'

const ServiceHead = () => {
    const [initialValuesHead, setInitialValuesHead] = useState(null)
const [initialValuesSection1 , setInitialValuesSection1]= useState(null);
const [initialValuesSection2 , setInitialValuesSection2]= useState(null)
const [initialValuesSection3 , setInitialValuesSection3]= useState(null)
const [initialValuesSection4 , setInitialValuesSection4]= useState(null)
const [initialValuesSection5 , setInitialValuesSection5]= useState(null)
const [initialValuesSection6 , setInitialValuesSection6]= useState(null)
    const fetchData = () => {
        
        axios.get((`${process.env.REACT_APP_URL}/admin/main/service/head`))
            .then(res => {
                setInitialValuesSection1(res.data.dtoHead[0].sections[0])
                setInitialValuesSection2(res.data.dtoHead[0].sections[1])
                setInitialValuesSection3(res.data.dtoHead[0].sections[2])
                setInitialValuesSection4(res.data.dtoHead[0].sections[3])
                setInitialValuesSection5(res.data.dtoHead[0].sections[4])
                setInitialValuesSection6(res.data.dtoHead[0].sections[5])
                setInitialValuesHead(res.data.dtoHead[0])
            })
            .catch((err) =>{});
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <MainHead initialValues={initialValuesHead}/>
        <MainIcons initialValues={initialValuesSection1}/>
        <MainIcons initialValues={initialValuesSection2}/>
        <MainIcons initialValues={initialValuesSection3}/>
        <MainIcons initialValues={initialValuesSection4}/>
        <MainIcons initialValues={initialValuesSection5}/>
        <MainIcons initialValues={initialValuesSection6}/>
    </div>
  )
}

export default ServiceHead