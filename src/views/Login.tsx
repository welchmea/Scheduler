// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "../components/SignUp";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         MUI
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const defaultTheme = createTheme(
    
);

export default function Login() {

  return (
    <>
        <div className="flex flex-row flex-wrap lg:h-screen w-full bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')] bg-cover bg-right">
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
              <SignUp label={"Login"}  />
            </Container>
            <Container component="main" maxWidth="sm">
              <SignUp label={"Sign up"}  />
            </Container>
          </ThemeProvider>
        </div>
        {/* <div>
          <Copyright sx={{ mt: 5, mb: 5 }} />
        </div> */}
    </>
  );
}
