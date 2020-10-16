export class Product {
    id: string;
    jenis: string;
    foto: string[];
    merek: string;
    merekProcessor: string;
    chipset: string;
    model: string;
    baseClock: string;
    boostClock: string;
    jumlahCore: string;
    jumlahThread: string;
    speed: string;
    ukuran: string;
    harga: string;
    stok: string;

    constructor(id, jenis, foto, merek, merekProcessor, chipset, model, baseClock, boostClock, jumlahCore, jumlahThread, speed, ukuran, harga, stok) {
        this.id = id;
        this.jenis = jenis;
        this.foto = foto;
        this.merek = merek;
        this.merekProcessor = merekProcessor;
        this.chipset = chipset;
        this.model = model;
        this.baseClock = baseClock;
        this.boostClock = boostClock;
        this.jumlahCore = jumlahCore;
        this.jumlahThread = jumlahThread;
        this.speed = speed;
        this.ukuran = ukuran;
        this.harga = harga;
        this.stok = stok;
    }
}

