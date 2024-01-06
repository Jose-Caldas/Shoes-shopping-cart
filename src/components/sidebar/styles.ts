import styled from 'styled-components'

export const Sidebar = styled.section`
  width: 15%;
  max-width: 18rem;
  position: fixed;
  height: 100%;
  border-right: 2px solid #e5e5e5;
  display: flex;
  flex-direction: column;

  gap: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
