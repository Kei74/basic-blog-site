import { Divider, List, ListItem, Typography } from '@mui/material'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image';

const components: MDXComponents = {
    h1: ({ children }) => (
        <Typography variant="h4" gutterBottom>{children}</Typography>
    ),
    h2: ({ children }) => (
        <Typography variant="h5" gutterBottom>{children}</Typography>
    ),
    h3: ({ children }) => (
        <Typography variant="h6" gutterBottom>{children}</Typography>
    ),
    p: ({ children }) => (
        <Typography variant="body1" mb={1}>{children}</Typography>
    ),
    ul: ({ children }) => (
        <List sx={{ listStyle: "disc", pl: 4}}>{children}</List>
    ),
    ol: ({ children }) => (
        <List sx={{ listStyle: "decimal", pl: 4}}>{children}</List>
    ),
    li: ({ children }) => (
        <ListItem sx={{ display: "list-item" }}>{children}</ListItem>
    ),
    hr: () => (
        <Divider sx={{mt: 1, mb: 1}}/>
    ),
    img: (properties) => (
        <Image {...properties} height={400} width={600} style={{objectFit: 'contain'}}/>
    )

} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
    return components;
}