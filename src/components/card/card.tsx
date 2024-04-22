import { component$ } from "@builder.io/qwik";
import "./card.scss"
import { Link } from "@builder.io/qwik-city";
import PinIcon from '~/assets/pin.png?jsx';
import BedIcon from '~/assets/bed.png?jsx';
import BathIcon from '~/assets/bath.png?jsx';
import SaveIcon from '~/assets/save.png?jsx';
import ChatIcon from '~/assets/chat.png?jsx';

export type CardData = {
    id: number;
    title: string;
    img: string;
    bedroom: number,
    bathroom: number,
    price: number,
    address: string,
    latitude: number,
    longitude: number,
}
export interface CardProps {
    item: CardData
}

export const Card = component$<CardProps>(({ item }) => {
    return (
        <div class="card">
            <Link href={`/${item.id}`} class="imageContainer">
                <img alt="Display image of property listing." src={item.img} />
            </Link>
            <div class="textContainer">
                <h4 class="title">
                    <Link href={`/${item.id}`}>{item.title}</Link>
                </h4>
                <p class="address">
                    <PinIcon />
                    <span>{item.address}</span>
                </p>
                <p class="price">
                    $ {item.price}
                </p>
                <div class="bottom">
                    <div class="features">
                        <div class="feature">
                            <BedIcon />
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div class="feature">
                            <BathIcon />
                            <span>{item.bathroom} bathroom</span>
                        </div>
                        <div class="icons">
                            <div class="icon">
                                <SaveIcon />
                            </div>
                            <div class="icon">
                                <ChatIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
