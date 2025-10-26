// app/posts/layout.tsx
import { FC } from 'react';
import Sidebar from '@/components/Sidebar'; // Adjust the path as needed
import { Box } from '@mui/material';

const PostsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="left">
            <Sidebar />
            <main style={{ marginLeft: '200px', padding: '20px' }}>
                {children}
            </main>
        </Box>
    );
};

export default PostsLayout;
