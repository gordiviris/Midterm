import { createContext, useState, useEffect } from "react"

export const themes = {
    light: {
        foreground: '#242526',
        background: '#fff',
    },
    dark: {
        foreground: '#fff',
        background: '#242526',
    },
    hacker: {
        foreground: '#00ff29',
        background: '#000000',
      },

};

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const[ theme, setTheme ] = useState(themes.light);

    // const toggleTheme = () => {
    //     setTheme((previousValue) => {
    //         // previousValue === themes.dark ? themes.light : themes.dark);
    //         if(previousValue === themes.light){
    //             return themes.dark;
    //         } else if (previousValue === themes.dark) {
    //             return themes.third;
    //         } else {
    //             return themes.light;
    //         }
    //     });
    // };

    useEffect(() => {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.foreground;
    }, [theme]);

    const toggleTheme = (selectedTheme) => {
        setTheme(themes[selectedTheme]);
      };

    return(
        <ThemeContext.Provider value ={{theme: theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};