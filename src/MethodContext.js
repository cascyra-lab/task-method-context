import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    clickHandler: null,
    subscribe() {
        this.clickHandler = () => {
            this.count++;
        };
        EventEmitter.on('click', this.clickHandler);
    },
    unsubscribe() {
        EventEmitter.off('click', this.clickHandler);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second(...args) {
        return args;
    },
};
