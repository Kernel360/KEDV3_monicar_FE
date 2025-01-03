'use client'

import Image from 'next/image'

import * as styles from './styles.css'

interface ModalProps {
    isOpen?: boolean
    icon?: string
    message: string
    confirmText: string
    closeText?: string
    onConfirm?: () => void
    onClose: () => void
}

const Modal = ({
    isOpen = false,
    icon = '/icons/alert-icon.svg',
    message,
    confirmText,
    closeText,
    onConfirm,
    onClose,
}: ModalProps) => {
    if (!isOpen) return

    const isCloseButton = closeText

    return (
        <>
            <div className={styles.modal}>
                {!isCloseButton && (
                    <button onClick={onClose} className={styles.xButton} aria-label='모달 닫기 버튼'>
                        <Image src={'/icons/clear-icon.svg'} alt='' width={36} height={36} />
                    </button>
                )}

                <Image src={icon} alt='' width={76} height={76} />

                <p className={styles.message}>{message}</p>

                <div className={styles.buttonGroup}>
                    {isCloseButton && (
                        <button onClick={onClose} className={styles.button}>
                            {closeText}
                        </button>
                    )}
                    <button onClick={onConfirm} className={styles.button}>
                        {confirmText}
                    </button>
                </div>
            </div>

            <div
                onClick={!isCloseButton ? onClose : undefined}
                className={`${styles.overlay} ${!isCloseButton ? styles.clickableOverlay : ''}`}
                role='presentation'
            />
        </>
    )
}

export default Modal
