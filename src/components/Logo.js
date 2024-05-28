import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis balise IMG sont accessibles dans "public" */}
      {/* balises IMG --> comme si je me trouve dans dossier PUBLIC */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
