# React 101

> Self learning experience through FRONT END MASTERS. Inside this repository you'll find everything I'll use to get started with ReactJS. Wish me luck!

## Branch: reactAppOne

**eslint set up in webpack:** 

```
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node-modules/
      }
    ],

```

## ReactRoute 

- IndexRoute: can go inside of a wrapping Route tag and it will take the same path as its parent. 

For ReactRouter in ClientApp we have 2 ways of calling it:

1.  

```
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const hashHistory = ReactRouter.hashHistory
const IndexRoute = ReactRouter.IndexRoute

```

2.

```

const { Router, Route, hashHistory, IndexRoute} = ReactRouter

```

## Props 

One way data flow 
- Props down actions up: data flows only from parent to children and not the other way around. 

```
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard show={show} key={show.imdbID}/>
      ))}
    </div>
  </div>
)

```


## PropTypes

- Are important for debugging but not good for production 

```
ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
}
```


**Readings:**

* 2ality.com
* Destructuring in javaScript

