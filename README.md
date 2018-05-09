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

## State 

In order to have or manage state we need to make class components.
There are two ways of making them: 

```
class Search extends React.Component {}

```

```
const Search = React.createClass({
	render() {
		return (
			<div>
			</div>
		)
	}
})

```

## UNIT TESTING

Using enzyme, mocha and chai

Create a folder call test, inside another one called helpers and inside a file called setup.js 
Here we will create a fake environment where to test as a browser like place. It is not a browser and it is similar to phantom. 

1. Intsall babel dependencies:
*npm install --save-dev babel-polyfill*
*npm install --save-dev babel-register*

2. Run either of these in your command line to run the tests
*mocha --require test/helpers/setup.js*
*mocha -R nyan --require test/helpers/setup.js*

* Some vocab
- Shallow: is going to test the render of the parent and not the children 
- Mount: interactive, similar sintax to jQuery. Slower than shallow

## Debug your state
- You can debug your state by making a JSON out of your data or props 
- We used this to debug our router with the different ids of the DB. This way we could show the objects belonging to each id in the DB on its own page. 

```
<pre><code>
  {JSON.stringify(this.props, null, 4)}
</code></pre>
```


## Data tunneling 
- Instead of making AXAJ requests to every and each component we do that only once in the most common ansester. 


#### Readings

* 2ality.com
* Destructuring in javaScript
* React Formly (Form validation library)



