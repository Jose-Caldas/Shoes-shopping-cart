import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.section`
  position: relative;
  padding: 16px;
  width: 270px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.3s ease;
  border-radius: 4px;

  .card-img {
    width: 162px;
  }

  @media screen and (max-width: 510px) {
    width: 100%;
  }
`

export const CardHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  padding: 0 32px;
  top: 32px;

  svg {
    z-index: 1;
    cursor: pointer;
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #eee;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 300;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  del {
    font-size: 12px;
  }

  span {
    font-weight: 600;
    font-size: 13px;
    color: red;
  }
`

export const AddCart = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  text-decoration: none;

  p {
    padding: 0.5rem;
    color: #fff;
    background-color: #222222;
    margin-bottom: 1rem;
    border-radius: 4px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
