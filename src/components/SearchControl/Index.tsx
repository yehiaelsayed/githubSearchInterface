import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { ResultItem } from "../../types/index";
import { Dispatch } from "redux";
import { Typing } from '../../redux/actions/searchActions'
import { InputContainer, Input, TypeSelect, Section } from './searchControl.styled'

interface PropsWrapper {
  startSearch: (query: string, type: string) => void;
}


const SearchControl: React.FC<PropsWrapper> = ({ startSearch }) => {

  const [type, setType] = React.useState('users');

  const dispatch: Dispatch<any> = useDispatch();

  const startTyping = React.useCallback(
    (query: string) => dispatch(Typing(query)),
    [dispatch]
  );
  const handleTypingEvent = function (e: any) {

    let query = e.target.value;
    startTyping(query)
    if (query.length >= 3) {
      console.log(query, type)
      startSearch(query, type);
    }
  }

  return (
    <Section>
      <InputContainer>
        <Input onInput={handleTypingEvent} placeholder='please type here'></Input>
      </InputContainer>
      <TypeSelect onChange={(e: any) => { setType(e.target.value) }}>
        <option key="users" value="users">Users</option>
        <option key="repository" value="repositories">Repositories</option>
      </TypeSelect>
    </Section>
  );
};

export default SearchControl;