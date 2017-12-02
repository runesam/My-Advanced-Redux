import React, { Component } from 'react';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		 this.handleAddComment = this.handleAddComment.bind(this);
	}
	handleAddComment() {
		this.setState({ comment: 'new' });
		console.log(654);
	}
	render() {
		return (
			<div className='comment-box'>
				<h1>Comment Box</h1>
				<textarea name='comment' id='commentText' cols='30' rows='10' />
				<button onClick={this.handleAddComment}>Comment</button>
			</div>
		);
	}
}

export default CommentBox;

