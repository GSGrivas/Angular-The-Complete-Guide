export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    setActiveToInactiveCounter()
    {
        this.activeToInactiveCounter += 1
    }
    setInactiveToActiveCounter()
    {
        this.inactiveToActiveCounter += 1
    }
}