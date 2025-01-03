'use client'

import { useModal } from '@/app/hooks/useModal'
import Modal from '@/components/common/Modal'

const HomePage = () => {
    const { isOpen, openModal, closeModal } = useModal()

    return (
        <>
            <button onClick={openModal}>모달</button>
            <Modal
                isOpen={isOpen}
                icon='/icons/black-alert-icon.svg'
                message='정말 삭제하시겠습니까? 진짜요?'
                confirmText='확인하기'
                // closeText='취소하기'
                onConfirm={closeModal}
                onClose={closeModal}
            />
        </>
    )
}

export default HomePage
