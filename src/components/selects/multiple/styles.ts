import styled from 'styled-components'

export const SelectMultipleContainer = styled.div`
  height: 85px;
  min-width: 540px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
  & > label {
    font-size: 14px;
    display: block;
    width: 100%;
    height: 17px;
    line-height: 17px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray800};
    margin-bottom: 8px;
  }
  & > div {
    display: block;
    min-height: 60px;
    line-height: 60px;
    font-size: 18px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.black45};
    border-radius: 4px;
    padding-left: 10px;
    cursor: pointer;
  }
  & > ul {
    display: none;
    z-index: 1000;
  }
  & > ul.active {
    display: block;
    position: relative;
    margin-top: 5px;
    min-width: 505px;
    font-size: 18px;
    outline: none;
    padding: 16px;
    border: 1px solid ${(props) => props.theme.colors.black45};
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    & > li {
      display: block;
      margin: 5px 0px;
      height: 32px;
      line-height: 32px;
      padding-left: 7px;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.colors.orange};
        color: ${(props) => props.theme.colors.white};
      }
    }
    & > li.active {
      background-color: ${(props) => props.theme.colors.orange};
      color: ${(props) => props.theme.colors.white};
    }
  }
  .label-text-validator {
    color: ${(props) => props.theme.colors.black60};
    margin-top: 95px;
    font-size: 14px;
    position: absolute;
  }
  .label-text-validator-error {
    margin-top: 95px;
    color: ${(props) => props.theme.colors.red};
    font-size: 14px;
    position: absolute;
  }
`
