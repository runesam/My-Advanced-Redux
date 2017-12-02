import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CommentsList extends Component {
	renderComments() {
		if (!this.props.comments) {
			return false;
		}
		return this.props.comments.map((comment, key) => <li key={key}>{comment}</li>);
	}

	render() {
		return (
			<ul className='comments-list'>
				{this.renderComments()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		comments: state.comments
	}
}

export default connect(mapStateToProps)(CommentsList);
