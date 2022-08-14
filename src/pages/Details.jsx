import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/firebase";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const Details = () => {
    const { id } = useParams();
    const { contactList } = useFetch();

    return (
        <div>
            {contactList?.map((item,index)=>{
                return(
                    <div>
                        {item.id===id &&
                        <div>

                        <h1>
                            {item.title}
                        </h1>
                        <img src={item.img} alt={item.title} />
                        <p>{item.data}</p>
                        </div>
                        }

                    </div>
                )
            })}
        </div>
        
        
    );
};

export default Details;
