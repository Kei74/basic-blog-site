import { getPostTitles } from "@/utils";
import { Box, Link, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default async function Home() {
  const posts = await getPostTitles();
  return (
    <Box>
      <Paper elevation={3} style={{ padding: '40px', margin: '20px', fontWeight: "bold" }}>
        <Typography variant="h3">
          Posts:
        </Typography>

        <List sx={{ margin: "10px" }}>
          {posts.map(post => (
            <ListItemButton key={post.slug} component={Link} href={`/posts/${post.slug}`}>
              <ListItemText
                primary={<Typography variant="h5">{post.title}</Typography>}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
