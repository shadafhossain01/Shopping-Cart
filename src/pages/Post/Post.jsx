import { useEffect, useState } from "react";
import { useDeletePostMutation, useGetPostsQuery } from "../../redux/features/post/postApi";

const Post = () => {
  const {data,isLoading,error}=useGetPostsQuery()
  const [deletePost] = useDeletePostMutation();
  const [postData,setPostData]=useState([])

  const handleDeletePost=async(id)=>{
    await deletePost(id)
    setPostData(postData.filter(item=>item.id!=id))
  }

  if(isLoading) <p>Loading....</p>
  if(error) <p>{error.message}</p>

    useEffect(() => {
      setPostData(data);
    }, [data]);

  return (
    <div className="grid grid-cols-3 gap-[5px] mt-10">
      {postData?.map((post) => (
        <div
          className="card card-dash bg-base-100 w-96 shadow-xl"
          key={post.id}
        >
          <div className="card-body">
            <p className="font-bold text-[21px]">{post.id}</p>
            <h2 className="card-title">{post.title}</h2>
            <p>{post.body}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
