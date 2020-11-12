import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { BookServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import BookstoreService from './services/bookstore-service';
import store from './store'

const bookstoreService = new BookstoreService();

ReactDOM.render(
    // To connect our redux with react app
    // Our components will have access to date which we have in store
    <Provider store={store}>
        {/* ErrorBoundary should be inside of Provider because it could
        need to have access to some date from Provider. F.e. to the language for 
        show correct message */}
        <ErrorBoundary store={store}>
            {/*  all components from App will have access to our service and
            it means to data from this service */}
            <BookServiceProvider value={bookstoreService} >
                {/* all components from our App will have access to Router */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookServiceProvider>
        </ErrorBoundary>
    </Provider>
    ,
    document.getElementById('root'));
