import React from 'react'
import styles from './ChartBar.module.css'




const ChartBar = props => {
    let barFillHeight = '0%'

    if(props.value > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    console.log(barFillHeight)
    console.log(props.maxValue)

    return (
        <div className={styles.chart_bar}>
            <div className={styles.chart_bar__inner}>
                <div className={styles.chart_bar__fill} style={{height: barFillHeight, backgroundColor: props.value>100 ? 'red' : ''}}></div>
            </div>
            <div className={styles.chart_bar__label}>
                {props.label}
            </div>
        </div>
    )    
}

export default ChartBar;
