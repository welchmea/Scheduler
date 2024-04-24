import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    
)

export default function Signup() {
    const navigate = useNavigate();

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //   firstName: data.get('firstName'),
        //   lastName: data.get('lastName'),
        //   phone: data.get('phone'),
        //   email: data.get("email"),
        //   password: data.get("password"),
        // });

          const newUser = {firstName: data.get('firstName'), lastName: data.get('lastName'), phone: data.get('phone'), email: data.get("email"), password: data.get("password") };
          const results = await fetch("http://localhost:5000/createUser", {
            method: "post",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (results.status === 201) {
            alert(
              `Congratulations! You have create an account.`
            );
            navigate('/');
          } else {
            alert(
              `Defer to the status code: ${results.status}, to determine what went wrong.`
            );
          }
          navigate('/');
      };

  return (
    <>
        <div className="flex flex-row flex-wrap lg:h-screen w-full bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')] bg-cover bg-right">
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                marginBottom: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "black" }}>
                <LockOutlinedIcon />
              </Avatar>
               <Typography component="h1" variant="h5">
               Sign Up
              </Typography> 
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      autoComplete="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid> 
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
            </Container>
          </ThemeProvider>
        </div>
        {/* <div>
          <Copyright sx={{ mt: 5, mb: 5 }} />
        </div> */}
    </>
  );
}
