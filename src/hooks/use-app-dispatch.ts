import {useDispatch} from 'react-redux';
import {AppDispatch} from '@utils/types/state.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
