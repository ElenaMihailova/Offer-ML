import React from 'react';
import { Button } from '@mui/material';

interface MessengerButtonProps {
  href: string;
  text: string;
  iconSrc: string;
  backgroundColor: string;
  hoverColor: string;
  altText: string;
}

const MessengerButton: React.FC<MessengerButtonProps> = ({
  href,
  text,
  iconSrc,
  backgroundColor,
  hoverColor,
  altText,
}) => {
  return (
    <Button
      href={href}
      sx={{
        color: 'common.black',
        fontFamily: "'Exo 2', sans-serif",
        fontSize: {
          xs: '16px',
          md: '30px',
        },
        lineHeight: 1.55,
        fontWeight: 700,
        borderWidth: '1px',
        borderRadius: '30px',
        backgroundColor: backgroundColor,
        backgroundPosition: 'center center',
        borderColor: 'transparent',
        borderStyle: 'solid',
        paddingY: '5px',
        transition:
          'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out',
        boxShadow: '0px 4px 39px 0px rgba(255, 226, 236, 0.3)',
        textTransform: 'none',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '818px',
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }}
    >
      {text}
      <img
        src={iconSrc}
        alt={altText}
        style={{
          marginLeft: '8px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
        }}
      />
    </Button>
  );
};

export default MessengerButton;
