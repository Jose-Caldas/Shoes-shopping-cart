import styled from 'styled-components'

export const Container = styled.section`
  padding-right: 20px;
  .sidebar-title {
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
  }

  .sidebar-items {
    margin-top: 20px;
  }

  .sidebar-label-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .sidebar-label-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }

  .all {
    background: linear-gradient(blue, crimson);
  }

  .sidebar-label-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .sidebar-label-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .sidebar-label-container input:checked ~ .checkmark:after {
    display: block;
  }

  .sidebar-label-container .checkmark:after {
    top: 6.4px;
    left: 6.4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
  }

  .line {
    margin-top: 3rem;
    border-color: #f7f7f7;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
`

export const Items = styled.div`
  margin-top: 20px;
`

export const CategoryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;

    @media screen and (max-width: 1044px) {
      display: block;
      background-color: #4c956c;
      border: none;
      margin-bottom: 20px;
      color: #fff;
      padding: 10px;
      border-radius: 4px;
    }
  }
`
