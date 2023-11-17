// Mui
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
// react
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PageResource() {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      await fetch("https://api.github.com/users/atheo810/repos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDataApi(data);
        });
    };
    getApi().catch(console.error);
  }, []);
  return (
    <div className=" flex flex-wrap w-full">
      {dataApi.map((data) => (
        <Box
          // sx={{ minWidth: 300, maxWidth: 300 }}
          key={data.id}
          className="p-2 max-sm:w-full sm:w-full md:max-w-[350px] md:min-w-[350px] md:min-h-[250px] md:max-h-[250px]"
        >
          <Card
            sx={{
              bgcolor: "#000000",
              borderRadius: "15px",
            }}
            className="border border-white"
          >
            <CardContent>
              <Typography color="#FFFFFF" sx={{ fontSize: 20 }} gutterBottom>
                {data.name}
              </Typography>
              <Typography color="#FFFFFF" sx={{ mb: 1.5 }}>
                {data.description}
              </Typography>{" "}
              <Typography color="#FFFFFF" sx={{ mb: 1.5 }}>
                {data.updated_at}
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="text-white font-semibold" to={data.html_url}>
                Go to Repo
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
}
