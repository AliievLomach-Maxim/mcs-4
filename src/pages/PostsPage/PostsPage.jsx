import { useDispatch, useSelector } from 'react-redux'
import PostLIst from '../../components/PostLIst/PostLIst'
import { useEffect, useRef } from 'react'
import { createPost, fetchPosts, removePost } from '../../redux/posts/postsOps'
import { Field, Form, Formik } from 'formik'
import toast from 'react-hot-toast'

const PostsPage = () => {
	const { posts, isLoading, error } = useSelector((state) => state.posts)
	const dispatch = useDispatch()

	const errorMessageForToast = useRef(null)

	const handleCreatePost = (data, { reset }) => {
		dispatch(createPost(data))
		reset()
	}

	const handleRemovePost = (id) => {
		dispatch(removePost(id))
	}
	useEffect(() => {
		errorMessageForToast.current = error
	}, [error])

	// useEffect(() => {
	// 	// !posts.length && dispatch(fetchPosts())
	// 	dispatch(fetchPosts())
	// 		.unwrap()
	// 		.then(() => {
	// 			toast.success('Success')
	// 		})
	// 		.catch(() => toast.error(`Oops..,${errorMessageForToast.current}`))
	// }, [dispatch])

	useEffect(() => {
		const getPosts = async () => {
			try {
				await dispatch(fetchPosts()).unwrap()
				toast.success('Success')
			} catch (err) {
				toast.error(err.message)
			}
		}
		getPosts()
	}, [dispatch])

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Oops...{error}</h1>}
			<Formik initialValues={{ title: '', body: '' }} onSubmit={handleCreatePost}>
				<Form>
					<Field type='text' name='title' />
					<Field type='text' name='body' />
					<button type='submit'>Create</button>
				</Form>
			</Formik>

			<hr />
			{posts && posts.length > 0 && <PostLIst posts={posts} handleRemove={handleRemovePost} />}
		</div>
	)
}

export default PostsPage
