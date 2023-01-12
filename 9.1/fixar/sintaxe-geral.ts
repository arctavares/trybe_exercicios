class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;
    
    constructor(brand: string, size: number, resolution: string, connections: string[],) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

    turnOn() {
        console.log(`Marca: ${this._brand} Tamanho: ${this._size} Resolução: ${this._resolution} Conexões: ${this._connections}`);
    }

    get getConnectionTo(): string | undefined {
        return this._connectedTo;
    }

    set setConnectionTo(value: string | undefined) {
        if(!value || this._connections.includes(value)) {
            this._connectedTo = value;    
            console.log(this._connectedTo);
        }else{
            console.log('Sorry, connection unavailable');
        }
    }
}

const myTv = new Tv('samsung', 42, '1080p', ['hdmi', 'Wi-fi']);

myTv.turnOn();
myTv.setConnectionTo = 'Wi-fi';
console.log('Connected to:', myTv.getConnectionTo);