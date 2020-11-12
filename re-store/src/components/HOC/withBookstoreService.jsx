import React from 'react';
import { BookServiceConsumer } from '../bookstore-service-context/bookstore-service-context';

//  Now any components which would be wrapped into our
//  `withBookstoreService` will have access to our 
// service - `bookstoreService`
const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookServiceConsumer>
        {
          (bookstoreService) => {

            return (
              <Wrapped {...props} bookstoreService={bookstoreService} />
            );
          }
        }
      </BookServiceConsumer>
    );
  }
};

export default withBookstoreService;
