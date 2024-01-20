import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid #eee;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`

export const CustomButton = styled.button`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;

  p {
    letter-spacing: 0.1rem;
    color: #000;
    font-size: 1rem;
    font-size: bold;

    @media screen and (max-width: 340px) {
      font-size: 14px;
      letter-spacing: 0.05rem;
    }
  }

  .icon-up {
    transition: transform 0.3s ease-in-out;
    transform: rotate(180deg);
  }
  .icon-down {
    transition: transform 0.3s ease-in-out;
  }
`
