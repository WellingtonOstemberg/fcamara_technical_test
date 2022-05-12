import styled from 'styled-components'

export const AdminWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 24px 28px;
  ul {
    display: flex;
    li {
      cursor: pointer;
      display: flex;
      height: 49px;
      padding: 16px;
      list-style: none;
      &.active {
        color: ${(props) => props.theme.colors.orange};
      }
    }
  }
`

export const BadgeAdmin = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
`

export const DropdownAdmin = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 7px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.35px;
  }
`
