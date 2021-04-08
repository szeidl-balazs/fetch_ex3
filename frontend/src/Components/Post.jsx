import React from 'react';

const Post = (props) => {

	return (
		<div className="post-container">
			<div className="posttitle-container">
				<div className="post-title">{props.title}</div>
			</div>			
			<div className="post-body">{props.body}</div>
		</div>
	)
};

export default Post;