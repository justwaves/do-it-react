import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setLocation } from 'store/modules/appRouter';

const RouterStateContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation(location));
  }, [dispatch, location]);

  return null;
};

export default RouterStateContainer;
