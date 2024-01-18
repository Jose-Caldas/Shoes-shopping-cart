import * as S from './styles'

interface ModalClearCartProps {
  setIsOpenModal: () => void
  handleClearCart: () => void
}

function ModalClearCart({
  setIsOpenModal,
  handleClearCart,
}: ModalClearCartProps) {
  return (
    <S.ModalContainer className="animation-left">
      <h1>Clear your Cart</h1>
      <p>Are you sure you want to clear your cart?</p>
      <button className="clear-btn" onClick={() => handleClearCart()}>
        Clear
      </button>
      <button className="cancel-btn" onClick={() => setIsOpenModal()}>
        Cancel
      </button>
    </S.ModalContainer>
  )
}

export default ModalClearCart
