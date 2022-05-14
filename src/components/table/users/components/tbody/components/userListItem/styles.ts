import styled from 'styled-components'

export const TableUsersTBodyTr = styled.tr`
  height: 96px;
  & + tr {
    margin-top: 8px;
    border-top: 8px solid ${(props) => props.theme.colors.background};
  }
  background-color: ${(props) => props.theme.colors.white};
  td:nth-child(1) {
    padding-left: 24px;
  }
  td:nth-child(2) {
    & > div {
      display: flex;
      flex-direction: column;
      span + span {
        font-size: 14px;
        font-weight: 400;
        color: ${(props) => props.theme.colors.gray600};
      }
    }
  }
  td:nth-child(3) {
    color: ${(props) => props.theme.colors.gray600};
    font-weight: 400;
  }
  td {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
  }
`
