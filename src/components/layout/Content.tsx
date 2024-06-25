import * as React from 'react';
import { Grid, Box, styled } from '@mui/material';

const StyledBox = styled(Box)({
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  backgroundColor: '#E5E5E5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  marginLeft: '60px',
  border: '1px solid #ccc',
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
});

export function Content() {
  return (
    <Grid container justifyContent="center" spacing={4} style={{ marginTop: '117px' }}>
      <Grid item md={6}>
        <img
          src={''}
          alt="사진 설명"
          style={{
            width: '100%',
            maxWidth: '640px',
            height: 'auto',
          }}
        />
      </Grid>
      <Grid item md={6}>
        <StyledBox>
          {/* 여기에 Content 컴포넌트의 내용을 추가 */}
        </StyledBox>
      </Grid>
    </Grid>
  );
}

export default Content;
