export interface ICarouselImages {
    image: string,
    caption?: string,
}

export const CarouselImages: ICarouselImages[] = [
    {
        image: '/images/carousel/slide1.png',
        caption: 'The opening of a new course: Aircraft Maintenance',
    },
    {
        image: '/images/carousel/slide2.jpg',
    },
    {
        image: '/images/carousel/slide3.jpg',
    },
];

export default CarouselImages;