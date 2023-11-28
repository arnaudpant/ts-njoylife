import { createContext, useContext, useState } from "react";

export type GlobalContext = {
    openBurger: boolean,
    setOpenBurger:any
}

/** CONTEXT */
export const ToggleMenuBurgerContext = createContext<GlobalContext>({
    openBurger: false,
    setOpenBurger:()=>{}
})

/** PROVIDER */
export const ToggleMenuBurgerProvider = (props:any) => {
    const [openBurger, setOpenBurger] = useState(false)


    return <ToggleMenuBurgerContext.Provider value={{openBurger, setOpenBurger}} {...props} />
}

/** HOOK PERSO */

export const useToggleMenuBurger = () => {
    const context = useContext(ToggleMenuBurgerContext)
    if(!context){
        throw new Error("useToggleMenuBurger s'utilise avec <ToggleMenuBurgerProvider> ")
    }
    return context
}

