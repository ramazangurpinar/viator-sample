import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CenteredTitleProps {
  title: string;
}

const CenteredTitle: React.FC<CenteredTitleProps> = ({ title }) => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h4" component="h2" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default CenteredTitle;
