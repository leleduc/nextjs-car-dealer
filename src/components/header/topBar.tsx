"use client";
import React, { useState } from "react";
import Select from "react-select";

const LanguageDropdown = ({
  selectedLanguage,
  handleLanguageChange,
  languageOptions,
}) => {
  return (
    <Select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      options={languageOptions}
      isSearchable={false}
    />
  );
};

const TopBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
  ];
  return (
    <div className="container">
      <div className="clearfix top-bar-wrapper">
        {/* LANGS */}
        <LanguageDropdown
          selectedLanguage={selectedLanguage}
          handleLanguageChange={handleLanguageChange}
          languageOptions={languageOptions}
        />

        {/* Header Top bar Login */}

        {/* Header top bar Socials */}
      </div>
    </div>
  );
};

export default TopBar;
