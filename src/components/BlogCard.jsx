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
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useFetch } from "../utils/firebase";

export default function BlogCard() {
    const { data, setData } = useContext(AuthContext);
    const { contactList } = useFetch();

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {contactList?.map((item, index) => {
                // console.log(item)
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
                                    {/* {item.userEmail[0]} */}
                                </Avatar>
                            }
                            title={item.userEmail}
                        />
                        <CardMedia
                            className="image"
                            component="img"
                            image={item.img}
                            alt={item.title}
                        />
                        <CardContent className="content">
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
