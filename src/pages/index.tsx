import RefreshPosts from '@/components/RefreshPosts';
import CreatePostForm, { TPostData } from '@/components/CreatePostForm';
import PostList from '@/components/PostList';
import usePost from '@/hooks/usePost';
import withAuth from '@/services/withAuth/withAuth';
import Head from 'next/head';

 function Home() {
  const postEvents = usePost({
    fetchInitialData: true
  })

  const onSubmit = async(data: TPostData) => {
    await postEvents.createPost(data)
  }

  const onRefresh = async() => {
    await postEvents.getFreshPosts()
  }

  return (
    <>
      <Head>
        <title>Home - CodeLeap Network</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <CreatePostForm
          title="What's on your mind?"
          onSubmit={onSubmit}
        />
        <RefreshPosts onRefresh={onRefresh} />
        <PostList {...postEvents} />
      </main>
    </>
  )
}

export default withAuth(Home)
