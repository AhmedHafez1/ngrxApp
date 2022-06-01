import * as PostActions from './post.action';
import { Post } from './post.model';

export type PostAction = PostActions.All;

const defaultState: Post = {
  message: 'This is the Default Message',
  likes: 0,
};

const newState = (currentState: any, newData: any) => {
    return { ...currentState, ...newData };
};

export function postReducer(
  state: Post = defaultState,
  action: PostAction
): Post {

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, { message: action.payload });
    case PostActions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });
    case PostActions.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });
    case PostActions.RESET:
      return defaultState;
    default:
      return state;
  }
}
