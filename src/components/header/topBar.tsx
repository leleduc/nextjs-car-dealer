'use client';
import React, { useState } from 'react';

const TopBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="w-full bg-green-200 ">
      <div className="bg-green-400 w-[80%] py-3 m-auto">
        {/* LANGS */}
        <select name="languges" id="languges">
          <option value="eng">ENG</option>
          <option value="vi">VN</option>
          <option value="cn">CN</option>
          <option value="fr">FRN</option>
        </select>

        {/* Header Top bar Login */}

        {/* Header top bar Socials */}
      </div>
    </div>
  );
};

export default TopBar;
