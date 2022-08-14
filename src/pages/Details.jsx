import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/firebase";
import Container from "@mui/material/Container";
const Details = () => {
    const { id } = useParams();
    const { contactList } = useFetch();

    return (
        <Container>
            {contactList?.map((item,index)=>{
                return(
                    <Container>
                        {item.id===id &&
                        <div>
                        <h1>
                            {item.title}
                        </h1>
                        <img src={item.img} alt={item.title} loading="lazy"/>
                        <p className="details-data">{item.data}</p>
                        </div>
                        }

                    </Container>
                )
            })}
        </Container>
        
        
    );
};

export default Details;
