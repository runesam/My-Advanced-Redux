import React, { Component } from 'react';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		 this.handleAddComment = this.handleAddComment.bind(this);
		 this.handleChange = this.handleChange.bind(this);
		 this.state = {
	        comment: ''
		 };
	}
	handleChange(e) {
		this.setState({ comment: e.target.value });
	}
	handleAddComment(e) {
		e.preventDefault();
		this.setState({ comment: '' });
	}
	render() {
		return (
			<form className='comment-box' onSubmit={this.handleAddComment}>
				<h1>Comment Box</h1>
				<textarea name='comment' value={this.state.comment} id='commentText' cols='30' rows='10' onChange={this.handleChange}/>
				<button action='submit'>Comment</button>
			</form>
		);
	}
}

export default CommentBox;

