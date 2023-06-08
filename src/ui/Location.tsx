import React from "react";
import useLocation from "hooks/useLocation";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Location() {
  const { regiao } = useLocation();
  return (
    <div className="mx-auto max-w-screen-md h-10">    
  <p className="container mx-auto px-4 text-zinc-50 md:text-center py-2 px-4 text-xs">
  <i className="text-yellow-200"><LocationOnIcon/></i>
  {regiao && <span>Ofertas para  <strong> {regiao} </strong> e Região.</span>}
  {!regiao && <span> Ofertas exclusivas para todo o brasil.</span>}
</p>
</div>
  );
}
//