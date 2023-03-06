import React from 'react'
import '../Vakansiyalar/Vakansiya.scss'
import VakansiyaHeader from './VakansiyaHeader/VakansiyaHeader'
import VakansiyaJob from './VakansiyaJob/VakansiyaJob'
import VakansiyaTeam from './VakansiyaTeam/VakansiyaTeam'
const Vakansiya = () => {
    const role = localStorage.getItem('roleName');
    return (
        <div className='main-vakansiya'>
            <div className='news-main'>
                <div className='news-main-comp'>
                    <div className='news-main-comp-p'>
                        <p>
                            Vakansiya / Başlıq
                        </p>
                    </div>
                </div>
            </div>
            {role && role !== "HR_MANAGER" &&
                <>
                    <VakansiyaHeader />
                    <VakansiyaTeam />
                </>
            }
            <VakansiyaJob />
        </div>
    )
}

export default Vakansiya