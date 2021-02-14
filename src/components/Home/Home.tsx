import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { ResultItem, SearchState } from "../../types/index";
import ListItem from '../ListItem/Index'
import SearchInpute from '../SearchControl/Index'
import { loading, searchFinished, error } from '../../redux/actions/searchActions'
import { Dispatch } from "redux";
import { Main, Section, SectionList, SectionLogo, SectionDiv, SectionError } from './Home.styled';
import { searchGitHub } from '../../Services/GitHubSearch'
const logo = require('../../assets/logo.svg');
const Home: React.FC = () => {

  const searchResult: readonly ResultItem[] = useSelector(
    (state: SearchState) => state.data,
    shallowEqual
  );
  const errorMessage: string | undefined = useSelector(
    (state: SearchState) => state.error,
    shallowEqual
  );
  console.log(errorMessage);
  const loadingValue: boolean | undefined = useSelector(
    (state: SearchState) => state.loading,
    shallowEqual
  );

  const query: string | undefined = useSelector(
    (state: SearchState) => state.query,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const fireLoading = React.useCallback(
    (isloading: boolean) => dispatch(loading(isloading)),
    [dispatch]
  );

  const searchFinishedAction = React.useCallback(
    (result: ResultItem[]) => dispatch(searchFinished(result)),
    [dispatch]
  );

  const errorAction = React.useCallback(
    (errorMsg: string) => dispatch(error(errorMsg)),
    [dispatch]
  );


  const searchHandler = async function (query: string, type: string) {
    fireLoading(true);
    try {
      const searchResult = await searchGitHub(query, type);
      searchFinishedAction(searchResult);
      fireLoading(false);

    } catch (err) {
      fireLoading(false);
      errorAction(err.message);
    }
  }


  return (
    <Main textLen={query?.length} >
      <Section>
        <SectionLogo src={logo.default} width={43} height={43} alt="Github logo" />
        <SectionDiv>
          <h3>
            GitHub Searcher
            </h3>
          <p>
            Search users or repositories below
            </p>
        </SectionDiv>
      </Section>
      <Section>
        <SearchInpute startSearch={searchHandler} />
      </Section>
      {loadingValue && <div>
        Loading  ...
      </div>}
      <SectionList>
        {
          searchResult.length ? searchResult.map((item: ResultItem, _key: number) => {
            return <ListItem key={_key} resultItem={item} />
          }) : null
        }
      </SectionList>
      {errorMessage !== undefined ? <SectionError>
        Oops Something went wrong, {errorMessage}
      </SectionError> : null}
    </Main >
  );
};

export default Home;