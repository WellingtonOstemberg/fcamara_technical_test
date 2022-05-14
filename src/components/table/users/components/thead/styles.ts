import styled from 'styled-components'

export const TableUsersTHead = styled.thead`
  tr {
    height: 42px;
    margin-top: 12px;
    th {
      text-align: left;
      padding-left: 13px;
      & > div {
        display: flex;
        align-items: center;
        & > div {
          display: flex;
          flex-direction: column;
          font-size: 11px;
          max-height: 19px;
        }
        span {
          display: flex;
          align-items: center;
        }
        svg {
          margin-left: 5px;
        }
      }
    }
  }
`
