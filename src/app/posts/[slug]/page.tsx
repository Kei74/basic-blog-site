// app/posts/[slug]/page.js
import { Container, Typography, Paper, Box } from "@mui/material";
import { getSlugs, getPost } from "@/utils";

export const dynamicParams = false;
export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map(slug => ({slug: slug}));
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const {slug} = await params;
  const { meta, Post } = await getPost(slug);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
        <Typography variant="subtitle2" align="right">{meta.date.toLocaleDateString()}</Typography>
        <Post />
      </Paper>
    </Container>
  );
};

export default PostPage;