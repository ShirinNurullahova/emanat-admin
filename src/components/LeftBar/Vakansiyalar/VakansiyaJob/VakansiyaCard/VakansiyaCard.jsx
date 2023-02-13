import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ElementCard from './ElementCard/ElementCard';

const VakansiyaCard = ({ btn, setBtn }) => {

    const [data, setData] = useState(null);
    const [button,setButton]=useState(false);
    const [id,setId]=useState('');


    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/job`), {
            headers: {
                "accept-language": "az"
            }
        })
            .then(res => {
               console.log(res.data)
                setData(res.data);
            })
            .catch((err) => {});
    }

    // refresh evezine 
    // btn icinde data olmuyanda
    useEffect(() => {
        if (!btn) {
            fetchData();
        }
    }, [btn]);
    const handleDelete=(id)=>{

    }
    const handleEdit=async(id)=>{
        const dataForm ={}
        dataForm.id=id;
        dataForm.data=[
            {
              "azTitle": "Fəaliyyət növü:",
              "enTitle": "Job Title:",
              "ruTitle": "Вид деятельности:",
              "azItems": [
                "Salam QA tester"
              ],
              "enItems": [
                "Junior QA tester for mobile application"
              ],
              "ruItems": [
                "Небольшой QA-тестер для мобильного приложения"
              ]
            },
            {
              "azTitle": "Son müraciət tarixi:",
              "enTitle": "Job application closing date:",
              "ruTitle": "Последняя дата подачи заявки:",
              "azItems": [
                "07.03.2023"
              ],
              "enItems": [
                "07.03.2023"
              ],
              "ruItems": [
                "07.03.2023"
              ]
            },
            {
              "azTitle": "Ərazi:",
              "enTitle": "Territory:",
              "ruTitle": "Территория:",
              "azItems": [
                "Bakı / Bakı ərazisi üzrə"
              ],
              "enItems": [
                "Baku / Head Office"
              ],
              "ruItems": [
                "Баку / на территории Баку"
              ]
            },
            {
              "azTitle": "İş növü:",
              "enTitle": "Employment type:",
              "ruTitle": "Тип работы:",
              "azItems": [
                "Tam iş günü"
              ],
              "enItems": [
                "Full-time"
              ],
              "ruItems": [
                "На постоянной основе"
              ]
            },
            {
              "azTitle": "Öhdəliklər:",
              "enTitle": "Responsibilities:",
              "ruTitle": "Обязательства:",
              "azItems": [
                "Web və mobil tətbiqlərin manual və avtomatlaşdırılmış testi;",
                "Ödəmə sisteminə qoşulan xidmətlərin funksionallığının testi;",
                "Yeni və mövcud məhsullar üçün test proseslərinin hazırlanıb tətbiq olunması;",
                "Texniki işlərin sənədləşməsi;",
                "Avtomatlaşdırılmış test skriptlərin hazırlanması və nəticələrin yoxlanması;",
                "Ödənişlərdə yaranan problemlərin araşdırılması, qarşılarının alınması üçün tədbirlərin görülməsi;",
                "Məhsulların analizi, keyfiyyətin yoxlanması və xətaların aradan qaldırılması üçün tədbirlərin görülməsi;",
                "Keyfiyyəti təmin edən göstəricilərin izlənilməsi."
              ],
              "enItems": [
                "Manual and automated testing of web and mobile applications;",
                "Testing the functionality of services connected to the payment system;",
                "Development and implementation of test processes for new and existing products;",
                "Documentation of technical works;",
                "Development of automated test scripts and verification of results;",
                "Investigating problems arising in payments, taking measures to prevent them;",
                "Taking measures to analyze products, check quality and eliminate errors;",
                "Monitoring of quality assurance indicators."
              ],
              "ruItems": [
                "Ручное и автоматизированное тестирование веб и мобильных приложений;",
                "Тестирование функциональности сервисов, подключенных к платежной системе;",
                "Разработка и внедрение процессов тестирования новых и существующих продуктов;",
                "Документация технических работ;",
                "Разработка скриптов автоматизированного тестирования и проверка результатов;",
                "Расследование проблем, возникающих при оплате, принятие мер по их предотвращению;",
                "Принятие мер по анализу продукции, проверке качества и устранению ошибок;",
                "Мониторинг показателей обеспечения качества."
              ]
            },
            {
              "azTitle": "Tələblər:",
              "enTitle": "Requirements:",
              "ruTitle": "Требования:",
              "azItems": [
                "Ali təhsil",
                "Müvafiq sahə üzrə minimum 1 il iş təcrübəsi",
                "Alqoritmik və analitik düşünmə qabiliyyəti",
                "Orta səviyyədə proqramlaşdırma bilikləri (C#, Java, Python dillərindən biri üzrə)",
                "Təməl SQL bilikləri",
                "REST, HTTP, API, XML, JSON anlayışlarına hakim olma",
                "Task management sistemləri ilə tanışlıq (Trello/Jira)",
                "Mobile Automation Testing anlayışı (Selenium, Appium)",
                "Test ssenarilərin yazılması üzrə biliklər",
                "Postman və Swagger ilə işləmə bacarığı",
                "Texniki səviyyədə ingilis dili biliyi"
              ],
              "enItems": [
                "High education",
                "At least 1 year of work experience in the relevant field",
                "Ability to think algorithmically and analytically",
                "Intermediate programming knowledge (in one of C#, Java, Python languages)",
                "Basic SQL knowledge",
                "Master the concepts of REST, HTTP, API, XML, JSON",
                "Familiarity with task management systems (Trello/Jira)",
                "Concept of Mobile Automation Testing (Selenium, Appium)",
                "Knowledge of writing test scenarios",
                "Proficiency with Postman and Swagger",
                "Knowledge of the English language at a technical level"
              ],
              "ruItems": [
                "Высшее образование",
                "Опыт работы не менее 1 года в соответствующей сфере",
                "Алгоритмическая и аналитическая способность мыслить ",
                "Знание программирования на среднем уровне (на одном из языков C#, Java, Python)",
                "Базовые знания SQL",
                "Знание понятий REST, HTTP, API, XML, JSON.",
                "Знание систем управления задачами (Trello/Jira)",
                "Понятие Mobile Automation Testing (Selenium, Appium)",
                "Знание написания тестовых сценариев",
                "Умение работать с Postman и Swagger",
                "Знание английского языка на техническом уровне"
              ]
            },
            {
              "azTitle": "İş şəraiti:",
              "enTitle": "We offer:",
              "ruTitle": "Рабочие условия:",
              "azItems": [
                "Ofis daxili",
                "İş rejimi həftənin 5 günü (09:00 – 18:00)",
                "Təşəbbüskar təkliflərin dəyərləndirilməsi",
                "Əmək haqqının 15 gündən bir ödənilməsi",
                "Tibbi sığorta təminatının verilməsi",
                "Nahar yeməyinin təmin olunması;",
                "“Birlikdə istirahət” tədbirlərinin keçirilməsi"
              ],
              "enItems": [
                "The designated work area",
                "Working hours: 6 days a week, from 10:00 to 17:00",
                "Wages payment are done every 15 days",
                "Medical insurance coverage",
                "Corporate catering"
              ],
              "ruItems": [
                "Офис;",
                "График работы 5 дней в неделю (09:00 - 18:00)",
                "Оценка инициативных предложений",
                "Выплата заработной платы каждые 15 дней",
                "Предоставление медицинской страховки",
                "Предоставление обеда",
                "Мероприятия «Отдыхаем вместе»"
              ]
            }
          ]
        dataForm.page='Career'
       
        try {
          const response = await axios.patch(
            `${process.env.REACT_APP_URL}/admin/vacation/job`,
            dataForm
          );
          if (response.status == 200) {
            fetchData();
          }
        } catch (error) {
          alert("error");
        }
    }
    return (
        <>
                 <div className="middle-main">
                    <table className="middle-main-bottom">
                        <thead>
                            <tr>
                            <th>{data && data[0]?.sections[0]?.title}</th>
                            <th>{data && data[0]?.sections[1]?.title}</th>
                            </tr>
                        </thead>
            {
                
                data?.map((e) => (
                        <tbody>
                            <tr>
                                <td>{e && e?.sections[0]?.items[0]}</td>
                                <td>{e && e?.sections[1]?.items[0]}</td>
                                <td onClick={()=>{
                                    setButton(true)
                                    setId(e?.id)}}>Edit</td>
                                <td onClick={()=>handleDelete(e?.id)}>Delete</td>
                              
                            </tr>
                        </tbody>
                ))

            }
               </table>
                {
                button && <ElementCard id={id} setButton={setButton} button={button}/>
            }
             </div>
        </>

    )
}

export default VakansiyaCard