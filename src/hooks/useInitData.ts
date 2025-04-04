import { setStartDay, useAppDispatch } from '../redux';
import { START_DATE } from '../utils';

const useInitData = () => {
  const dispatch = useAppDispatch();
  dispatch(setStartDay(START_DATE));
};

export default useInitData;
