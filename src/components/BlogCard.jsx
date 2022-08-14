import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useFetch } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function BlogCard() {
    const { contactList } = useFetch();
    const navigate = useNavigate()

    const handleShowData = (id) =>{
        navigate(`details/${id}`)
    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {contactList?.map((item, index) => {
                
                return (
                    <Card
                        key={index}
                        sx={{ width: "300px", m: 2, height: "456px" }}
                    >
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: red[500] }}
                                    aria-label="recipe"
                                >
                                    {item.email[0]}
                                </Avatar>
                            }
                            title={item.email}
                        />
                        <CardMedia
                            className="image"
                            component="img"
                            image={item.img}
                            alt={item.title}
                        />
                        <CardContent
                            className="content"
                            sx={{
                                textOverflow: "ellipsis",
                                bgcolor: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "#101010"
                                        : "grey.100",
                                color: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "grey.300"
                                        : "grey.800",
                                border: "1px solid",
                                borderColor: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "grey.800"
                                        : "grey.300",
                                borderRadius: 2,
                                fontSize: "0.875rem",
                                fontWeight: "700",
                            }}
                            onClick= {()=>handleShowData(item.id)}
                        >
                            <Typography variant="body2" color="text.secondary">
                                {item.data}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
}
