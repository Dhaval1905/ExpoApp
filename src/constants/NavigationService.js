// import { NavigationActions, StackActions } from '@react-navigation/native';
import { useRef, createRef } from 'react';
import { navigationStrings } from './NavigationStrings';
import { NavigationActions } from 'react-navigation';
import { StackActions } from '@react-navigation/native';

// let _navigator = useRef();

export const _navigator = createRef();
export const isReadyRef = createRef();
function setTopLevelNavigator(navigatorRef) {
  _navigator.current = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.current?.navigate(routeName, params);
}
function onPush(routeName, params) {
  _navigator.current?.dispatch(StackActions.push(routeName, params));
}

function goBack() {
  _navigator?.current?.dispatch(NavigationActions.back());
}

function resetNavigation(routeName =navigationStrings.AUTHSTACK) {
  _navigator?.current?.reset({
    index: 0,
    routes: [{ name: routeName}],
  });
}

export default {
  navigate,
  setTopLevelNavigator,
  resetNavigation,
  goBack,
  onPush,
};
