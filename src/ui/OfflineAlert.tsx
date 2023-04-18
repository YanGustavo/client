import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OfflineAlert = () => {
  if (!navigator.onLine) {
    toast.error('Você está offline, verifique sua conexão.');
  }

  return <ToastContainer />;
};

export default OfflineAlert;