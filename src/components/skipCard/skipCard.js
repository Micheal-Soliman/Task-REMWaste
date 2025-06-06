"use client"
import React, { useState } from 'react'
import styles from './skipCard.module.css'
import Image from 'next/image'
import calculateSkipPriceWithVat from '@/utils/calculateSkipPriceWithVat'
import { FaArrowRight } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";


const SkipCard = ({ skip, handleSelectSkip, selected }) => {
    const Toggle = () => {
        return (
            selected ? <>Selected</> : <>Select This Skip <FaArrowRight /></>
        )
    }

    return (
        <div className={styles.container} onClick={() => handleSelectSkip(skip)}>
            <div className={styles.topContainer}>
                <div className={styles.size}>{skip?.size} Yards</div>
                <div className={styles.imgContainer}>
                    {skip?.image && <Image src={skip?.image || null} alt='skip image' fill className={styles.img} />}
                </div>
                {!skip?.allowed_on_road && <div className={styles.alert}><GoAlertFill />Not Allowed On The Road</div>}
            </div>
            <div className={styles.bottomContainer}>
                <h2 className={styles.title}>{skip?.size} Yard Skip</h2>
                <p className={styles.duration}>{skip?.hire_period_days} day hire period</p>
                <p className={styles.price}>£{calculateSkipPriceWithVat(skip?.price_before_vat, skip?.vat).toFixed(2)}</p>
                <button className={styles.btn} onClick={() => handleSelectSkip(skip)}><span className={styles.textBtn}><Toggle /></span></button>
            </div>
        </div>
    )
}

export default SkipCard