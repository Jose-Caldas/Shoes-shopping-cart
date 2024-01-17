import styled from 'styled-components'

export const AccordionSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #eee;
`

export const CustomButton = styled.button`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  h2 {
    letter-spacing: 0.1rem;
    color: #222;
    font-size: 1rem;
    font-size: bold;

    @media screen and (max-width: 340px) {
      font-size: 14px;
      letter-spacing: 0.05rem;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`

export const Dropdown = styled.div`
  border-top: 2px solid #eee;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  width: 100%;
`
