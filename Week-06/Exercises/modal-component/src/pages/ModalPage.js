import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModalPage = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(true)
    }
    const handleCloseClick = () => {
        setModalOpen(false)
    }

    const modalContent = <p>This is modal content populated by children prop</p>

    const actionBar = (
        <>
        <Button success outline onClick={() => {console.log('other buton function fired')}} className="mr-8">Some Prompt</Button>
        <Button danger outline onClick={handleCloseClick}>Close Modal</Button>
        </>
        )


    return (
        <div>
            <Button onClick={handleClick} success rounded>Open Modal</Button>
            {modalOpen && <Modal title="Modal Title" onClose={handleCloseClick} actionBar={actionBar} crazy>
                <p>{modalContent}</p>
            </Modal>}
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )

}

export default ModalPage;