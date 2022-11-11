class UnityInteractor {
    instance;

    constructor(instance) {
        this.instance = instance;
    }

    execute = async(message, arg = null, tryTillSuccess = false) => {
        do {
            try {
                if(arg == null) {
                    this.instance.SendMessage("JSInteractionManager", message);
                }
        
                else {
                    this.instance.SendMessage("JSInteractionManager", message, arg);
                }
                break;
            }
    
            catch (e) {
                console.error(e);
                await window.sleep(1);
            }
        } while (tryTillSuccess);
    }

    hideTarget = () => {
        this.execute("HideTarget");
    }
}

var interactor = null;
function newInteractor(unityInstance) {
    interactor = new UnityInteractor(unityInstance);

    // to work inside modules
    window.interactor = interactor;
}

function hideTarget() {
    if(window.interactor != null) {
        window.interactor.hideTarget();
    }
}
