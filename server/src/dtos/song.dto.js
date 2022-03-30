module.exports = class SongDto {
    name;
    band;
    year;

    constructor({ name, band, year }) {
        this.name = name;
        this.band = band;
        this.year = ~~year;
    }
}
