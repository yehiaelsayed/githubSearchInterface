import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { SearchState, ResultItem } from "../../types/index";
import { ListItemWrapper, StyledListItem, ListItemLink, ListItemDetails, Star } from './listItem.styled'

const star = require('../../assets/star.png');
const empty = require('../../assets/empty.png');
interface PropsWrapper {
  resultItem: ResultItem,
}
function CreateStars(score: number) {
  const stars = []

  for (let i = 0; i < score; i++) {
    stars.push(<Star key={i} src={star.default} />)
  }
  return stars;
}

const listItem = function (props: PropsWrapper) {

  return (
    <ListItemWrapper>
      <StyledListItem>
        <ListItemLink target={"_blank"} href={props.resultItem.pageUrl || "#"}>
          <img src={props.resultItem.avtarUrl || empty.default} alt={"Logo"} />
        </ListItemLink>
        <ListItemDetails>
          <div>
            <label>Title :{props.resultItem.name} </label>
          </div>
          {
            props.resultItem.stars ? <div><label>Score :</label> <div>
              {

                CreateStars(props.resultItem.stars)
              }
            </div>
            </div> : null
          }
        </ListItemDetails>
      </StyledListItem>
    </ListItemWrapper>
  );
};

export default listItem;