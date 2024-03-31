"use client"
import {useState, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Profile from '@components/Profile'

const MyProfile = () => {

  const Router = useRouter()
    const {data: session} = useSession()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts =async() =>{
          const response = await fetch(`/api/users/${session?.user.id}/posts`)
          const data = await response.json()
          setPosts(data)
        }
        if(session?.user.id) fetchPosts()
        },[])

    const handleEdit = (post) => {
      Router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async (post) => {

    }
  return (
    <Profile
    name="my"
    desc= "welcome"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}

    />
    )
}

export default MyProfile