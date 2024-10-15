import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addNew, removePost, updatePost } from '../../redux/postSlice/slice'
import PostLIst from '../../components/PostLIst/PostLIst'

const PostsPage = () => {
	// const posts = useSelector((state) => state.posts.posts)
	const { posts } = useSelector((state) => state.posts)
	const dispatch = useDispatch()

	const handleAddNewPost = (data) => {
		const newPost = {
			...data,
			id: nanoid(),
		}
		dispatch(addNew(newPost))
	}

	const handleRemovePost = (id) => {
		dispatch(removePost(id))
	}

	const handleUpdatePost = (id, data) => {
		const updatetedPost = {
			id,
			...data,
		}
		dispatch(updatePost(updatetedPost))
	}

	return (
		<div>
			{posts && posts.length > 0 && <PostLIst posts={posts} handleRemove={handleRemovePost} />}
		</div>
	)
}

export default PostsPage
