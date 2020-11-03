// function need to create more readable structure from
// 
// const PersonList = withSwapiService(mapPersonMethodsToProps)(
//     withData(
//       withChildFunction(renderName)(ItemList)));
// 
//  here we have function which over other function which over other
//  a(b(c(value)))
// in item-list.js

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (prevResult, f) => f(prevResult), comp
    );
};

export default compose;