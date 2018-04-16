var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = () => {
	return (
		<div>
			<MyTitle title='Hello' color='rebeccapurple'/>
			<MyTitle title='my little' color='papayawhip'/>
			<MyTitle title='robots' color='#f06d06'/>
		</div>
	)
}

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))
