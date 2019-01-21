import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			message: '',
		}

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChangeName(event) {
		this.setState({name: event.target.value});
	}
	handleChangeMessage(event) {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		console.log('A name and message were submitted: ' + this.state.name + ' message: ' + this.state.message);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<div>Server Response</div>
				<div>Response goes here!</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Name:
							<input type="text" value={this.state.value} onChange={this.handleChangeName}/>
						</label>
						<label>
							Message:
							<input type="text" value={this.state.value} onChange={this.handleChangeMessage} />
						</label>
						<input type="submit" value ="Send Message" />
					</form>
				</div>
			</div>
			)
	}
}

export default App;