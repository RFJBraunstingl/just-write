import React, {useEffect, useState} from "react";
import styles from './styles.module.css'
import ChangeToTextImage from "../../../../assets/img/image_white.svg";
import ChangeToPreviewImage from "../../../../assets/img/image_filled.svg";

export enum Mode {
    EDIT,
    VIEW
}

interface Props {
    onModeChange?: (newMode: Mode) => void
}

const ToggleEditModeButton = ({onModeChange = () => {}}: Props) => {

    const [isEditModeActive, setEditModeActive] = useState<boolean>(true)

    const handleClick = () => setEditModeActive(!isEditModeActive)

    useEffect(() => {
        const currentMode = isEditModeActive ? Mode.EDIT : Mode.VIEW
        onModeChange(currentMode)
    }, [isEditModeActive, onModeChange])

    return <div className={styles.Wrapper} onClick={handleClick}>
        <img src={isEditModeActive ? ChangeToPreviewImage : ChangeToTextImage}  alt='button to change mode' />
    </div>
}

export default ToggleEditModeButton