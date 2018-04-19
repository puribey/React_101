# React 101

> Self learning experience through FRONT END MASTERS. Inside this repository you'll find everything I'll use to get started with ReactJS. Wish me luck!

## Intro to React 

1. Everything is a function 
2. Library that allows us to create this component. 
3. React is the way we write the component 
4. DOM where we take that component. Native for example is for iOS.

**Easy way to make your first component:**

``` 
In index.html

<body>
    <div id="app"></div>
    <script src="node_modules/react/dist/react.js"></script>
	<script src="node_modules/react-dom/dist/react-dom.js"></script>
	<script>
		var div = React.DOM.div
		var h1 = React.DOM.h1

		var MyFirstComponent = (
			div(null,
				h1(null, 'This is my first component')
			)
		)

		ReactDOM.render(MyFirstComponent, document.getElementById('app'))
	</script>
</body>

``` 


### Some React Sintax 

* createClass = Used to create a reusable component 
* createElement = Used to create one specific instance of this class we have created
* createFactory = Used to create a function that creates the element (is not used with jsx)
* render = must always return ONE component unless there is one parent with some children and need to be as pure as possible

### Props

* Props are a way of giving the same component different information or characteristics to display. You can replace null with style and pass a color as a prop for example. 

``` 
In ClientApp.js

var MyTitle = React.createClass({
	render() {
		return (
			div(null,
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})


//Other ways of creating elements 
//var MyFactory = React.createFactory(MyTitle)
//var ce = React.createElement
//div(null, MyFactory(null))
// OR
// div(null,ce(MyTitle,null))


var MyFirstComponent = (
	div(null,
		React.createElement(MyTitle, {title: 'This are different titles', color: 'rebeccapurple'}),
		React.createElement(MyTitle, {title: 'that have different props', color: 'mediumaquamarine'} ),
		React.createElement(MyTitle, {title: 'Because props rock', color: 'pink'})
	)
)


```

### Some specific things that make sense 

* As we can't asign a var x = 1,2,3 as it needs an object or an array to work, same happens with React there is ONE parent or class that has many components or sons. 

#### References

* To organize a React proyect check React Route Repo. 

Link to React Official [web](https://reactjs.org/).

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

**Readings:**

* 2ality.com
* Destructuring in javaScript

