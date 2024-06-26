import * as React from "react";
import {
  Grid,
  Box,
  styled,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import svgGroup from "../../components/img/Mask group.svg";

const StyledBox = styled(Box)({
  width: "100%",
  maxWidth: "1720px",
  height: "100%",
  maxHeight: "800px",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px",
  margin: "200px auto 0",
});

const StyleBox = styled(Box)({
  width: "100%",
  maxWidth: "574px",
  height: "100%",
  maxHeight: "800px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e5e5",
  borderRadius: "40px 0 0 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "70px",
  marginRight: "70px",
});

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "860px",
  height: "100%",
  maxHeight: "800px",
  borderRadius: "10px",
});

const currencies = [
  {
    value: "구 선택",
    label: "구 선택",
  },
  {
    value: "북구",
    label: "북구",
  },
  {
    value: "서구",
    label: "서구",
  },
  {
    value: "중구",
    label: "중구",
  },
  {
    value: "달서구",
    label: "달서구",
  },
  {
    value: "수성구",
    label: "수성구",
  },
  {
    value: "달성군",
    label: "달성군",
  },
  {
    value: "군위군",
    label: "군위군",
  },
];

const advice = [
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
  {
    label: "원하는 상담 유형 선택",
    value: "원하는 상담 유형 선택",
  },
];

export function Content() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent={"flex-end"}>
        <Grid item xs={6}>
          <StyledImage src={svgGroup} alt="사진" />
        </Grid>
        <Grid item xs={6}>
          <StyleBox>
            <Typography
              fontSize={"20px"}
              marginLeft={"30px"}
              marginBottom={"26px"}
            >
              온라인상담
            </Typography>
            <Typography>
              <hr />
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      height: "52px",
                      width: "212px",
                      marginLeft: "52px",
                      marginTop: "28px",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="이름"
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      height: "52px",
                      width: "212px",
                      marginRight: "52px",
                      marginTop: "28px",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="전화번호"
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <TextField
                sx={{
                  width: "456px",
                  height: "52px",
                  marginLeft: "68px",
                  marginTop: "30px",
                }}
                id="outlined-select-currency"
                select
                label="주소"
                defaultValue="중구"
                helperText="구를 선택해주세요"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                sx={{
                  width: "456px",
                  height: "52px",
                  marginLeft: "68px",
                  marginTop: "50px",
                }}
                id="outlined-select-currency"
                select
                label="상담유형"
                defaultValue="원하는 상담 유형 선택"
                helperText="원하시는 상담 유형을 선택해주세요"
              >
                {advice.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: "456px",
                    height: "102px",
                    marginLeft: "68px",
                    marginTop: "50px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="요청사항/문의사항"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </StyleBox>
        </Grid>
      </Grid>
    </StyledBox>

    
  );
}

export default Content;
