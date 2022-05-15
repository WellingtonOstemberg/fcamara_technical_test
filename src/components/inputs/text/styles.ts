import styled from 'styled-components'

export const InputTextContainer = styled.div`
  height: 85px;
  min-width: 540px;
  display: flex;
  flex-direction: column;
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
  & > input {
    display: block;
    min-height: 60px;
    width: 100%;
    font-size: 18px;
    outline: none;
    padding-left: 10px;
    border: 1px solid ${(props) => props.theme.colors.black45};
    border-radius: 4px;
  }
  .label-text-validator {
    color: ${(props) => props.theme.colors.red};
    margin-top: 8px;
    display: flex;
    align-items: center;
    & > span {
      margin-left: 5px;
    }
  }
`
