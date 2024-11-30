import { reactive } from 'vue'

class ZIndexManager {
    constructor() {
        this.currentZIndex = 1000
        this.map = new Map()
    }

    register(id) {
        this.map.set(id, this.currentZIndex)
        this.currentZIndex += 1
    }

    unregister(id) {
        this.map.delete(id)
        this.currentZIndex -= 1
    }

    getZIndex(id) {
        return this.map.get(id)
    }
}

export default reactive(new ZIndexManager())