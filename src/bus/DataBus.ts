/**
 * @author timger
 */
class DataBus {
    private static instance: DataBus;
    public data: object = {
        models: {},
        states: {},
        modals: {},
        forms: {},
        commands: {}
    };

    private constructor() {
    }

    static getInstance() {
        if (!DataBus.instance) {
            DataBus.instance = new DataBus();
        }
        return DataBus.instance;
    }

    register(id: string, type: resourceEnum, obj: any) {
    }


    get(id: string) {

    }
}

let dataBus = DataBus.getInstance();
window.dataBus = dataBus;
export default dataBus;