class MyEventBus {
    constructor() {
        this.eventBus = {} 
    }
    //事件装载阶段
    on(eventName,eventCallback,thisArg) {
        let handlers = this.eventBus[eventName]
        if(!handlers) {
            handlers = []
            this.eventBus[eventName] = handlers
        }
        handlers.push({eventCallback,thisArg})
    }
    //事件卸载阶段
    off(eventName,eventCallback) {
        const handlers = this.eventBus[eventName]
        if(!handlers) return
        const newHandlers = [...handlers]
        for(let i = 0;i < newHandlers.length; i++) {
            const handler = newHandlers[i]
            if(handler.eventCallback === eventCallback) {
                const index = handlers.indexOf(handler)
                handlers.splice(index,1)
            }
        }

    }
    //事件发射阶段
    emit(eventName,...arg) {
        const handlers = this.eventBus[eventName]
        if(!handlers) return
        handlers.forEach(handler => {
            handler.eventCallback.apply(handler.thisArg,arg)
        });
    }

    
}