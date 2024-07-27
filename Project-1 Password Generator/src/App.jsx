import React from "react";
import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(14);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  const handleGeneratePassword = () => {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    let validChars = "";
    if (includeLowercase) {
      validChars += lowercaseLetters;
    }
    if (includeUppercase) {
      validChars += uppercaseLetters;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setShowMessage("Copied to Clipboard");
    setTimeout(() => {
      setShowMessage("");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="flex flex-col items-center justify-center mb-4">
        <p className="font-medium">Techie's Mini Project</p>
        <h1 className="font-bold text-2xl">Password Generator</h1>
      </div>
      <div className="flex-1 items-center ">
        <div className="space-x-12">
          <label className="font-medium">Password Length</label>
          <input
            type="number"
            min="8"
            max="64"
            value={passwordLength}
            className="border-2 border-black mt-2 rounded-md"
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="space-x-2 items-center mt-5">
          <input
            type="checkbox"
            className="border-2 border-black mt-2 rounded-md"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          <label className="font-medium">UpperCase</label>

          <input
            type="checkbox"
            className="border-2 border-black mt-2 rounded-md"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          <label className="font-medium">LowerCase</label>

          <input
            type="checkbox"
            className="border-2 border-black mt-2 rounded-md"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label className="font-medium">Symbols</label>

          <input
            type="checkbox"
            className="border-2 border-black mt-2 rounded-md"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <label className="font-medium">Numbers</label>
        </div>
      </div>
      <div>
        <button
          onClick={handleGeneratePassword}
          className="bg-blue-500 p-2 text-white rounded-md mt-5"
        >
          Generate Password
        </button>
      </div>
      <div className=" mt-5">
        <p className="font-medium">Generated Password</p>
        <p className="font-bold border-2 p-3">{password}</p>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 p-2 text-white rounded-md mt-2"
        >
          Copy to Clipboard{" "}
        </button>
        {showMessage && (
          <p className="bg-green-200 px-2 rounded-sm mt-2 text-xs font-medium justify-center flex py-1">
            {showMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
