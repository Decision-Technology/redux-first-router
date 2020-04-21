import { connectRoutes } from 'redux-first-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../state/reducers';
import { routePaths } from '../routes';


//connectRoutes- core function for Redux first router to work.It creates and maintains redux actions in order to create routes dynamically. 
//Once setting connectRoutes you can use <Link /> component and pass an action as its href prop and change the URLs used without having to change application code.
const {
    middleware: routerMiddleware,
    enhancer: routerEnhancer,
    initialDispatch
} = connectRoutes(routePaths, { initialDispatch: false });

/************************************************************************Root store ***********************************************************
* configureStore function has the creation logic of the redux store, which we can call and use later
* rootReducer - contains all the combined reducers we use-- since create store can take one reducer, we use combine function to combine them all and pass to createstore
* applyMiddleware - create a store enhancer which will apply routerMiddleware to the store's dispatch function. 
*/
export default function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            routerEnhancer,
            applyMiddleware(routerMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    initialDispatch();


    //Once the reducer's value changes,it is captured here and replaced the old root reducer with a new  one.
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../state/reducers', () => {
            const nextRootReducer = require('../state/reducers');

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
