export interface State {
  movies: string[];
}
export const initialState: State = {
  movies: ['Dark Knight'],
};
export interface Action {
  type: string;
  data: State;
}
export const reducer = (state = initialState, action: Action): State => {
  // eslint-disable-next-line no-console
  console.log(action);
  return state;
};
