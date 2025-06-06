"use client"
import React from 'react'
import styles from './footer.module.css'
import calculateSkipPriceWithVat from '@/utils/calculateSkipPriceWithVat'

const Footer = ({ skip, back, go }) => {

    return (
        <div className={styles.container}>
            <div className={styles.head}>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</div>
            <div className={styles.footerContainer}>
                <div className={styles.footerTextContainer}>
                    <div className={styles.title}>{skip?.size} Yard Skip</div>
                    <div className={styles.price}>£{calculateSkipPriceWithVat(skip?.price_before_vat, skip?.vat).toFixed(2)}</div>
                    <div className={styles.duration}>{skip?.hire_period_days} day hire period</div>
                </div>
                <div className={styles.footerBtnsContainer}>
                    <button onClick={() => back()}>Back</button>
                    <button onClick={() => go()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Footer