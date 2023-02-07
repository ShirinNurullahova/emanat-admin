import React from 'react'
import '../PartnerShip/Partnership.scss'
import PartnershipCooperation from './PartnershipCooperation/PartnershipCooperation'
import PartnershipHeader from './PartnershipHeader/PartnershipHeader'
import PartnershipLocationTerminal from './PartnershipLocationTerminal/PartnershipLocationTerminal'
import PartnershipReklam from './PartnershipReklam/PartnershipReklam'
import PartnershipServiceHead from './PartnershipServiceHead/PartnershipServiceHead'
import PartnershipTerminalCooperation from './PartnershipTerminalCooperation/PartnershipTerminalCooperation'
import PartnershipWorkWith from './PartnershipWorkwith/PartnershipWorkwith'
const Partnership = () => {
    return (
        <div className='partnership-main'>
         <PartnershipHeader/>
         <PartnershipCooperation/>
         <PartnershipTerminalCooperation/>
         <PartnershipServiceHead/>
         <PartnershipReklam/>
         <PartnershipLocationTerminal/>
         <PartnershipWorkWith/>
        </div>
    )
}

export default Partnership