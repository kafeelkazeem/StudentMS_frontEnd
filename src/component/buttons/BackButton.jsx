import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Back = (props) => {
    const navigate = useNavigate();
    const goBack = () => {
      navigate(props.route);
    };
    return (
      <Button
        component="label"
        variant="contained"
        sx={{ position: 'fixed', zIndex: 2 }}
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
      >
        Back
      </Button>
    );
  };

  export default Back