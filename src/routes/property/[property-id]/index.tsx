import { component$ } from "@builder.io/qwik";
import './index.scss'
import { Slider } from "~/components/slider/slider";
import { singlePostData, userData } from "~/lib/dummydata";
import PinIcon from '~/assets/pin.png?jsx';
import ChatIcon from '~/assets/chat.png?jsx';
import SaveIcon from '~/assets/save.png?jsx';
import UtilityIcon from '~/assets/utility.png?jsx';
import PetIcon from '~/assets/pet.png?jsx';
import FeeIcon from '~/assets/fee.png?jsx';
import SizeIcon from '~/assets/size.png?jsx';
import BedIcon from '~/assets/bed.png?jsx';
import BathIcon from '~/assets/bath.png?jsx';
import SchoolIcon from '~/assets/school.png?jsx';
import { QMap } from "~/components/map/qmap";

export default component$(() => {
    return (
        <div class="singlePage">
            <div class="details">
                <div class="container">
                    <Slider images={singlePostData.images} />
                    <article class="info">
                        <div class="top">
                            <div class="post">
                                <h2>{singlePostData.title}</h2>
                                <div class="address">
                                    <PinIcon />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div class="price">$ {singlePostData.price}</div>
                            </div>
                            <div class="user">
                                <img src={userData.img} alt="" />
                                    <span>{userData.name}</span>
                            </div>
                        </div>
                        <div class="bottom">
                            {singlePostData.description}
                        </div>
                    </article>

                </div>
            </div>
            <div class="features">
                {/* TODO: refactor into def. list */}
                <div class="container">
                    <p class="title">General</p>
                    <div class="listVertical">
                        <div class="feature">
                            <UtilityIcon />
                            <div class="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div class="feature">
                            <PetIcon />
                            <div class="featureText">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div class="feature">
                            <FeeIcon />
                            <div class="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p class="title">Sizes</p>
                    <div class="sizes">
                        <div class="size">
                            <SizeIcon />
                            <span>80 sqft</span>
                        </div>
                        <div class="size">
                            <BedIcon />
                            <span>2 beds</span>
                        </div>
                    <div class="size">
                        <BathIcon />
                        <span>1 bathroom</span>
                    </div>
                    </div>
                    <p class="title">Nearby Places</p>
                    <div class="listHorizontal">
                        <div class="feature">
                            <img src="/school.png" alt="" />
                            <div class="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div class="feature">
                            <img src="/pet.png" alt="" />
                            <div class="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div class="feature">
                            <img src="/fee.png" alt="" />
                            <div class="featureText">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p class="title">Location</p>
                    <div class="mapContainer">
                        <QMap items={[singlePostData]} />
                    </div>
                    <div class="buttons">
                        <button>
                            <ChatIcon />
                            Send a Message
                        </button>
                        <button>
                            <SaveIcon />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
