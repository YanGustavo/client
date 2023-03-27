import React, { useState } from "react";
import styled from "styled-components";


type Post = {
  id: any;
  title: string;
  content: string;
  isRead: boolean;
  date: any;
}

type Props = {
  posts: Post[];
}

const MessagePage: React.FC<Props> = ({ posts }) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>(posts);
  

  const handlePostClick = (postId: number) => {
    const updatedPosts = blogPosts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isRead: true
        }
      }
      return post;
    });
    setBlogPosts(updatedPosts);
  }
  const markAsRead = (postId: string) =>{
    return;
  }

  return (
    <BlogContainer>
      <Title>Blog</Title>
      {blogPosts.map(post => (
        <PostContainer key={post.id} read={post.isRead}>
          <TitleContainer>
            <PostTitle>{post.title}</PostTitle>
            {!post.isRead && <ReadButton onClick={() => markAsRead(post.id)}>Marcar como lido</ReadButton>}
          </TitleContainer>
          <PostContent>{post.content}</PostContent>
          <PostDate>{post.date}</PostDate>
        </PostContainer>
      ))}
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

type PostContainerProps = {
  read: boolean;
}

const PostContainer = styled.div<PostContainerProps>`
  background-color: ${props => props.read ? "#fff" : "#f2f2f2"};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PostTitle = styled.h3`
  font-size: 24px;
  color: #333;
`;

const ReadButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #111;
  }
`;

const PostContent = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

const PostDate = styled.span`
  font-size: 14px;
  color: #999;
`;


export default MessagePage;