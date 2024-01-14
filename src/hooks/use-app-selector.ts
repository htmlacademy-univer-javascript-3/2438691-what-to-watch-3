import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {State} from '@utils/types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
