import styled from 'styled-components'

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: transparent;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-top: 1rem;
  padding: 10px;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #252422;
    color: white;
  }
`

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`
