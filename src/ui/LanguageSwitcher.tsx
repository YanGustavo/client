import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSelect = styled.select`
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  border: none;
`;

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <LanguageSelect onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="pt">Português</option>
      <option value="fr">Français</option>
    </LanguageSelect>
  );
}

export default LanguageSwitcher;
