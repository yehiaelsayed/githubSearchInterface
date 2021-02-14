import styled from 'styled-components';


// styles for input component
export const InputContainer = styled.div`{
    margin-right:10px;
}`

// styles for input component
export const Input = styled.input`{
  padding:10px;
  border:2px solid #888888;
  border-radius: 2px;
  font-size: 16px;
  height:49px;
  color : #000000;
    width:360px;
}`
export const TypeSelect = styled.select`{
  padding:10px;
  border:2px solid #888888;
  border-radius: 2px;
  font-size: 16px;
  height:49px;
  color : #000000;
  width:125px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  &::-ms-expand { display: none };
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23828282' ><polygon points='0,0 8,0 4,4'/></svg>");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: auto 25%;
}`


export const Section = styled.section`{
  display: flex;
  justify-content: left;
  margin-bottom:20px;
  > p {
    color : #828282;
  }
}`;
