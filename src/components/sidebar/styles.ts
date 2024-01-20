import styled, { css } from 'styled-components'

type SidebarProps = {
  visible: boolean
}

export const Sidebar = styled.section<SidebarProps>`
  ${({ visible }) => css`
    position: fixed;
    width: 20%;
    max-width: 18rem;
    height: 100%;
    border-right: 2px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    gap: 20px;
    z-index: 2;

    @media screen and (max-width: 1044px) {
      background-color: #fff;
      z-index: 1;
      display: ${visible ? 'block' : 'none'};

      padding-top: 20px;
      width: 100%;
      max-width: 100%;

      opacity: 0;
      transform: translateX(-20px);
      animation: animationLeft 0.3s forwards ease-in-out;

      @keyframes animationLeft {
        to {
          opacity: 1;
          transform: initial;
        }
      }
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  `}
`

export const FilterContainer = styled.div`
  margin-left: 30px;
`

export const LogoContainer = styled.div`
  margin-bottom: 4rem;
  background-color: #222222;
  padding-bottom: 20px;
  padding-left: 2rem;

  h1 {
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    font-weight: normal;
    margin-top: 1.5rem;
  }
`
