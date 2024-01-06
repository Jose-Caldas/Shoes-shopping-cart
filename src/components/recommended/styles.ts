import styled from 'styled-components'

export const RecommendedTitle = styled.h2`
  margin-left: 20rem;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`

export const RecommendedFlex = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  padding-left: 20px;
  gap: 10px;

  button {
    &:hover,
    &:checked {
      background-color: #222;
      color: #fff;
    }

    &:nth-child(7) {
      background-color: #4c956c;
      color: #fff;

      display: none;

      @media screen and (max-width: 768px) {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`
export const ModalContainer = styled.div`
  background-color: #fff;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 300px;
    border: 1px solid #eee;
    margin-left: 3rem;
    margin-top: 1rem;
    opacity: 0;
    transform: translateY(-20px);
    animation: animationTop 0.3s forwards ease-in-out;

    @keyframes animationTop {
      to {
        opacity: 1;
        transform: initial;
      }
    }
  }
`
