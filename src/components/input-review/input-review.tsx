import {useState} from 'react';
import {useAppDispatch} from '@utils/hooks/use-app-dispatch.ts';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {addReviewAction} from '@utils/store/api-dispatcher.ts';

type State = {
  comment: string;
  stars: string;
}
export type InputReviewProps = {
  id: string;
}
export function InputReview(props: InputReviewProps) {
  const {id} = props;
  const film = useAppSelector((state) => state.film);
  const [state, setState] = useState<State>({
    comment: '',
    stars: '8'
  });
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (film?.id) {
      dispatch(addReviewAction({id: id, comment: state.comment, rating: parseInt(state.stars, 10)}));
    }
  };

  return (
    <div className="add-review">
      <form action="AddReview#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '10'}
            />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '9'}
            />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              value="8"
              onChange={(event) => {
                setState({...state, stars: event.currentTarget.value});
              }}
              checked={state.stars === '8'}
            />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '7'}
            />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '6'}
            />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '5'}
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '4'}
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '3'}
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '2'}
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={(event) => {
              setState({...state, stars: event.currentTarget.value});
            }}
            checked={state.stars === '1'}
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="reviewText"
            id="review-text"
            value={state.comment}
            onChange={(event) => setState({...state, comment: event.currentTarget.value})}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={handleSubmit}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
