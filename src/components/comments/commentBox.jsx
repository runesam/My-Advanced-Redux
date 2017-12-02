import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	saveComment
} from './../../actions/';

export class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.handleAddComment = this.handleAddComment.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTextAreaKey = this.handleTextAreaKey.bind(this);
		this.state = {
			comment: ''
		};
	}

	handleChange(e) {
		this.setState({ comment: e.target.value });
	}

	submitForm() {
		if (this.state.comment.trim() === '') {
			return false;
		}
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	}

	handleAddComment(e) {
		e.preventDefault();
		this.submitForm();
	}

	handleTextAreaKey(e) {
		if (e.which === 13) {
			e.preventDefault();
			this.submitForm();
		}
	}

	render() {
		return (
			<form className='comment-box form-horizontal' onSubmit={this.handleAddComment}>
				<h1>Comment Box</h1>
				<textarea
					className='form-control'
					name='comment'
					required
					value={this.state.comment}
					id='commentText'
					cols='30'
					rows='10'
					onKeyDown={this.handleTextAreaKey}
					onChange={this.handleChange}
				/>
				<div className='clearfix' />
				<br />
				<button className='btn btn-primary' action='submit'>Comment</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { saveComment })(CommentBox);

