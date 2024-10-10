import { TbTrash } from 'react-icons/tb'
import css from './Post.module.css'

const Post = ({ post, handleRemove }) => {
	return (
		<li className={css.post}>
			<div>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</div>
			<TbTrash className={css.icon} />
			<button className={css.btnRemove} onClick={() => handleRemove(post.id)}>
				remove
			</button>
		</li>
	)
}

export default Post
