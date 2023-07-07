import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  background: url("https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")
    center/55% repeat-x #000;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: $FFFFFF;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
  padding: 1vh;
`;
const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
      <SubHeading>Code for Rv</SubHeading>
    </Image>
  );
};

export default Banner;
