import { useHistory } from 'react-router-dom'

export function AdminRoom() {
    const history = useHistory();

    async function handleCreatePost() {
        history.push('/admin/posts/create');
    }

    return (
        <div>
            <h1>Admin Room!!</h1>
            <h2>Welcome to Admin room</h2>

            <button onClick={handleCreatePost}>
                Create a new post.
            </button>
        </div>
    )
}
