/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

const styles = StyleSheet.create({
});

export default App;
