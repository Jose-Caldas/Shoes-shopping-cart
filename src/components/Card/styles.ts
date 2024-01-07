import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.section`
  margin: 20px;
  border: 2px solid #ededed;
  padding: 20px;
  width: 270px;
  height: 400px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s ease;
  background-color: transparent;
  border-radius: 4px;

  .card-img {
    width: 12rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    height: 200px;
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (max-width: 510px) {
    width: 100%;
    height: 400px;
    flex-direction: column;
    gap: 0;
  }
`

export const CardDetails = styled.div``

export const CardTitle = styled.h3`
  margin-bottom: 1rem;
`
export const CardReviews = styled.span`
  margin-bottom: 1rem;
  display: flex;

  .rating-star {
    color: #d5ab55;
  }

  .total-reviews {
    font-size: 0.9rem;
    margin-left: 10px;
  }
`

export const CardPrice = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  del {
    font-size: 15px;
  }

  span {
    margin-left: 10px;
    font-weight: 600;
  }
`

export const AddCart = styled(Link)`
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
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #252422;
    color: white;
  }

  svg {
    margin-right: 0.5rem;
  }
`
