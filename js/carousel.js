class Carousel {

    constructor(image, text, link) {
        this.image = image;
        this.text = text;
        this.link = link;
    }

    static Start(arr) {

        Carousel._arr = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;

        Carousel.Next();

        setInterval(() => {
            Carousel.Next();
        }, 4000);
    }

    static Next() {

        let item = Carousel._arr[Carousel._sequence];

        let imgDiv = document.getElementById("carousel");
        let titleDiv = document.getElementById("carousel-title");

        imgDiv.innerHTML = `
            <a href="${item.link}">
                <img src="img/${item.image}" width="100%">
            </a>
        `;

        titleDiv.innerHTML = item.text;

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
}