import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'black',
  padding: 0,
}));

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
    justifyContent:'left',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <StyledContainer>
        <Grid container spacing={4}>
          <StyledGridItem item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              회사 정보
            </Typography>
            <Typography variant="body2">
              (주)00인테리어 | 대표: 홍길동 <br />
              대구광역시 달서구 이곡동 555로 <br />
              전화: 053-333-3333 | 팩스: 053-222-2222
            </Typography>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <StyledLink href="#" variant="body2">Home</StyledLink><br />
              <StyledLink href="#" variant="body2">About</StyledLink><br />
              <StyledLink href="#" variant="body2">Services</StyledLink><br />
              <StyledLink href="#" variant="body2">Contact</StyledLink>
            </Box>
          </StyledGridItem>
          <StyledGridItem item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              연락처
            </Typography>
            <Typography variant="body2">
              전화: 053.333.3333 <br />
              이메일: interior@naver.com
            </Typography>
          </StyledGridItem>
        </Grid>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
