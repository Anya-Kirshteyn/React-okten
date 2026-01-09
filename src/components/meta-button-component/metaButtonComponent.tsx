import {type FC, useState} from "react";
import type {IMeta} from "../../models/product-model.ts";
import styles from './metaButton.module.css'
type MetaButtonProps = {
    meta:IMeta
}


const MetaButtonComponent:FC<MetaButtonProps>=({meta})=>{
const [open,setOpen] = useState(false)
    return (
        <div className={styles.wrapper}>
            <button
                    className={styles.button}
                    onClick={()=>setOpen(prev =>!prev)}>Meta
            </button>
            {open && (
                <div className={styles.meta}>
                    <p><b>Created:</b> {meta.createdAt}</p>
                    <p><b>Updated:</b> {meta.updatedAt}</p>
                    <p><b>Barcode:</b> {meta.barcode}</p>
                </div>
            )}

        </div>
    )
}


export default MetaButtonComponent