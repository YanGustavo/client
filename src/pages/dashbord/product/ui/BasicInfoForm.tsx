import React from 'react';
import Input from 'components/Input';

const BasicInfoForm = ({ data, onDataChange }) => {
  const handleInputChange = (e) => {
    // Atualize os dados e chame onDataChange quando os campos mudarem
    const { name, value } = e.target;
    onDataChange({ [name]: value });
  };

  return (
    <div className="basic-info-form">
      <div className="form-group">
        <label htmlFor="code">Código:</label>
        <Input
          type="text"
          id="code"
          name="code"
          value={data.code}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="slug">Slug:</label>
        <Input
          type="text"
          id="slug"
          name="slug"
          value={data.slug}
          onChange={handleInputChange}
        />
      </div>
      {/* Renderize outros campos de entrada semelhantes para as outras propriedades */}
    </div>
  );
};

export default BasicInfoForm;
