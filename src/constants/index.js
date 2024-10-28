/**
 * For initialyse the App
 * @class
 */
export class Root {
    /**
     * @constructor
     * @param {HTMLDivElement} rootTag - Comment
     */
    constructor(rootTag) {
        this.root = rootTag
    }
    /**
     * 
     * @param {HTMLDivElement} appTag - Comment
     */
    render(appTag){
        this.root.append(appTag)
    }
}