import { defineStore } from "pinia";

export const useSelectControlStore = defineStore('selectControl', {
    state: () => ({
        triggerNext: false,
        triggerPrevious: false
    }),
    actions: {
        next() {
            this.triggerNext = true;
        },
        previous() {
            this.triggerPrevious = true;
        },
        resetTriggers() {
            this.triggerNext = false;
            this.triggerPrevious = false;
        }
    }
});