import React from 'react';




interface LanguageChangerBoxProps {
   language: string; 
   onLanguageChange?: (language: string) => void
};


function LanguageChangerBox({language, onLanguageChange = () => {}}:LanguageChangerBoxProps) {
    
    return (
        <section className='' >
            <section className='flex h-4 text-paragraph justify-center items-center italic' > 
                <span 
                    className={`mr-3 hover:underline underline-offset-1 hover:cursor-pointer ${ language === "ES" ? 'text-gold-dark' : "text-black-verdi"} `} 
                    onClick={() => onLanguageChange(language)}
                >
                    ES
                </span>
                <span>|</span>
                <span 
                    className={`ml-3 hover:underline underline-offset-1 hover:cursor-pointer ${language==="EN" ? 'text-gold-dark' : "text-black-verdi"} `} 
                    onClick={() => onLanguageChange(language)}
                >
                    EN
                </span>
            </section>
        </section>
    );
}

export default LanguageChangerBox;