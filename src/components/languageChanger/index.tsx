import React from 'react';




interface LanguageChangerBoxProps extends React.ComponentPropsWithRef <'input'>  {
   language: string; 
   onLanguageChange: (language: string) => void
};


function LanguageChangerBox({language, onLanguageChange}:LanguageChangerBoxProps) {
    
    return (
        <section className='  grid justify-end mt-2 mb-11 md:max-w-[350px] w-full ' >
            <section className='flex justify-center w-16 h-4 italic  ' > 
                <span 
                    className={`mr-3 hover:underline underline-offset-1 ${ language === "ES" ? 'text-gold-dark' : "text-black-verdi"} `} 
                    onClick={() => onLanguageChange(language)}
                >
                    ES
                </span>
                <span>|</span>
                <span 
                    className={`ml-3 hover:underline underline-offset-1 ${language==="EN" ? 'text-gold-dark' : "text-black-verdi"} `} 
                    onClick={() => onLanguageChange(language)}
                >
                    EN
                </span>
            </section>
        </section>
    );
}

export default LanguageChangerBox;