class Task {
    constructor(order) {
        this.order = order;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

const _tasks = [];
function _findTaskByOrder(order) {
    return _tasks.find(x => x.order.id === order.id);
}

function makeFood(order) {
    const task = new Task(order);
    _tasks.push(task);
    return task.promise;
}

function problem(order, err) {
    _findTaskByOrder(order).reject(err);
}

function finishFood(order) {
    _findTaskByOrder(order).resolve();
}

module.exports = {
    finishFood,
    makeFood,
    problem,
};