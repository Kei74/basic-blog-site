// app/components/Sidebar.tsx
import { FC } from 'react';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { getPostTitles } from '@/utils';

const Sidebar: FC = async () => {
  const posts = await getPostTitles();
  return (
    <Drawer variant="permanent">
      <Box>
        <Typography variant="h5" align="center" mt={2}>
          Posts
        </Typography>
        <List>
          {posts.map(post => (
            <ListItemButton key={post.slug} component={Link} href={`/posts/${post.slug}`}>
              <ListItemText
                primary={post.title}
                sx={{
                  maxWidth: '200px',
                  wordWrap: 'break-word',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
