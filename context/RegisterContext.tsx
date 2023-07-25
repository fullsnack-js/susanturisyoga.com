const ClassRegisterContext = React.createContext<{
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    weekday: string
    classTitle: string
    
}>