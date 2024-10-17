import { useDispatch, useSelector } from 'react-redux'
import PostLIst from '../../components/PostLIst/PostLIst'
import { useEffect, useRef } from 'react'
import { createPost, fetchPosts, removePost } from '../../redux/posts/postsOps'
import { Field, Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import {
	selectErrorPosts,
	selectFilteredPosts,
	selectLoadingPosts,
} from '../../redux/posts/postsSlice'

const PostsPage = () => {
	const filteredPosts = useSelector(selectFilteredPosts)

	// const posts = useSelector(selectPosts)
	const isLoading = useSelector(selectLoadingPosts)
	const error = useSelector(selectErrorPosts)

	// const searchFilterValue = useSelector(selectFilterValue)

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

	// const filteredPosts = posts?.filter((el) =>
	// 	el.title.toLowerCase().includes(searchFilterValue.toLowerCase())
	// )

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Oops...{error}</h1>}
			<SearchFilter />
			<Formik initialValues={{ title: '', body: '' }} onSubmit={handleCreatePost}>
				<Form>
					<Field type='text' name='title' />
					<Field type='text' name='body' />
					<button type='submit'>Create</button>
				</Form>
			</Formik>

			<hr />
			{filteredPosts && filteredPosts.length > 0 && (
				<PostLIst posts={filteredPosts} handleRemove={handleRemovePost} />
			)}
		</div>
	)
}

export default PostsPage
