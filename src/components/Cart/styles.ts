import styled from 'styled-components'

type CartContainerProps = {
  isvisible: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isvisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isvisible ? '1' : '0')};
  transition: all 0.3s ease;
  z-index: 999;

  p {
    color: #222222;
  }

  svg {
    color: #222222;
  }
`

export const CartEscapeArea = styled.div`
  width: 100%;
`

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
`
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;

  span {
    font-weight: 400;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  button {
    border: none;
    background: transparent;
    color: #ef233c;
    font-size: 1.325rem;

    cursor: pointer;
  }
`
