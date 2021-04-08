import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Post from './Post';

const PostList = () => {

	const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
	const [numberOfPost, setNumberOfPost] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {setData(result);
					
          setTimeout(() => {
            setIsLoaded(true);
          }, 2000);
        },				

        (error) => {
          console.log(error);
          setIsLoaded(true);
        }
      );
  }, []);

	console.log(data);

	useEffect (() => {


	}, [numberOfPost]);

	return (

		<div>
	
			<input placeholder="number of posts" onClick={(e) => {setNumberOfPost(e.target.value)}} />
			
		<div className="postlist-container">
			{
				isLoaded ?
				data.map((post) => 
					<Post
						key={`id-${post.userId}-${post.id}`}
						title={post.title}
						body={post.body}				
					/>)

				:
				
				<LoadingMask />
			}

		</div>


		</div>
		
	)
}

export default PostList;