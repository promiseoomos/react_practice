


class Context {
    value: null

    constructor(value : null){
        this.value = value
    }

    Provider = ({children, value} : { children : (value: null) => React.ReactNode , value: null}) => {
        this.value = value

        return children
    }

    Consumer = ({children} : { children : (value: null) => React.ReactNode }) => children(this.value)
}

function createContext(value = null){
    const context = new Context(value)

    return {
        Provider : context.Provider,
        Consumer : context.Consumer
    }
}

export default createContext;