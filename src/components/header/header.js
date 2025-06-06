'use client';

import { Stepper, Step, StepLabel } from '@mui/material';
import { usePathname } from 'next/navigation';
import './header.css'
import { FaLocationDot, FaRegTrashCan, FaTruck, FaShield, FaCalendar, FaRegCreditCard } from "react-icons/fa6";


const pathStepMap = {
    '/postcode': 0,
    '/waste-type': 1,
    '/skip': 2,
    '/permit-check': 3,
    '/choose-date': 4,
    '/payment': 5,
};

const steps = [
    { logo: <FaLocationDot />, name: 'Postcode' },
    { logo: <FaRegTrashCan />, name: 'Waste Type' },
    { logo: <FaTruck />, name: 'Select Skip' },
    { logo: <FaShield />, name: 'Permit Check' },
    { logo: <FaCalendar />, name: 'Choose Date' },
    { logo: <FaRegCreditCard />, name: 'Payment' }
];

const Header = () => {
    const pathname = usePathname();
    const activeStep = pathStepMap[pathname] ?? 0;

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>
                            <div className="step-content">
                                {step.logo}
                                <span>{step.name}</span>
                            </div>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default Header;
