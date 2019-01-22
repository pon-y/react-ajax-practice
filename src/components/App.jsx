import React from 'react';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			message: '',
			response: '',
		}
		
		this.postMessage = this.postMessage.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	/*Ajax requests*/

	postMessage(message, successCB) {
		$.ajax({
			url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
			type:'POST',
			data: JSON.stringify(message),
			contentType: 'application/json',
			success: successCB,
			error: function(error) {
				console.log('message failed to post. error.');
			}
		});
	}


	/*Event Handlers for submitting name and message*/
	handleChangeName(event) {
		this.setState({name: event.target.value});
	}
	handleChangeMessage(event) {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		this.postMessage({name: this.state.name, message: this.state.message}, (data) => {
			console.log(data);
			this.setState({response: data});
			//this.state.response = data;
		})
		console.log('Event submitted');
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<div>Server Response</div>
				<div>{this.state.response? this.state.response : 'Response goes here!'}</div>
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