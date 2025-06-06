"use client"
import SkipCard from '@/components/skipCard/skipCard'
import styles from './skip.module.css'
import skips from '../data.json'
import Footer from '@/components/footer/footer';
import { useState } from 'react';

const skipPage = () => {
    const [selectedSkip, setSelectedSkip] = useState(null);
    const handleSelectSkip = (skip) => {
        selectedSkip ? setSelectedSkip(null) : setSelectedSkip(skip);
    };

    const handleCloseBanner = () => {
        setSelectedSkip(null);
    };

    const handleContinue = () => {
        alert('Continue to next step');
    };
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Choose Your Skip Size</h1>
                <p className={styles.desc}>Select the skip size that best suits your needs</p>
            </div>
            <div className={styles.skipsContainer}>
                {skips.map((skip, index) => {
                    return (
                        <SkipCard key={index} selected={selectedSkip?.id === skip.id} skip={skip} handleSelectSkip={handleSelectSkip} />
                    )
                })}
            </div>
            {selectedSkip && <Footer skip={selectedSkip} back={handleCloseBanner} go={handleContinue} />}
        </div>
    )
}

export default skipPage