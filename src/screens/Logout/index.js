import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import logout from '../../context/actions/auth/logout';
import useDataLayer from '../../context/Provider';

const Logout = (props) => {
  const { authDispatch } = useDataLayer()
  useEffect(() => {
    logout()(authDispatch)
  }, [])
  return (
    <ActivityIndicator size={'large'} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} />
  );
}

export default Logout;
