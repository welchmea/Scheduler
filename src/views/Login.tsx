import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "../components/SignUp";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MUI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme(
    
);

export default function Login() {

  return (
    <>
      <div className="z-10 mt-48 flex flex-col items-center justify-center h-full">
        <div className="flex flex-row border border-white bg-backgroundCard h-full w-5/6 rounded-md">
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
              <SignUp label={"Login"}  />
            </Container>
            <Container component="main" maxWidth="sm">
              <SignUp label={"Sign up"}  />
            </Container>
          </ThemeProvider>
        </div>
        <div>
          <Copyright sx={{ mt: 5 }} />
        </div>
      </div>
    </>
  );
}
