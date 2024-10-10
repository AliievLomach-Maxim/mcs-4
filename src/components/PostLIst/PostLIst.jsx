import Post from '../Post/Post'

const PostLIst = ({ posts, handleRemove }) => {
	return (
		<div>
			<ul>
				{posts.map((el) => (
					<Post post={el} key={el.id} handleRemove={handleRemove} />
				))}
			</ul>
		</div>
	)
}

export default PostLIst
