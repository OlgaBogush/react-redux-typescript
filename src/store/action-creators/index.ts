import * as UserActionCreatorrs from "./user"
import * as TodoActionCreators from "./todo"

export default {
  ...UserActionCreatorrs,
  ...TodoActionCreators,
}
