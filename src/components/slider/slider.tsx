import { component$, useSignal, $ } from "@builder.io/qwik";
import './slider.scss'
import ArrowIcon from '~/assets/arrow.png?jsx';


type images= string[];

export const Slider = component$(({images}: {images: images})=>{

    const imageIndex = useSignal(null as number | null);
    const changeSlide = $((direction: 'left'|'right') => {
        if (imageIndex.value===null) return;
        switch (direction) {
                case 'left':
                imageIndex.value = ( imageIndex.value + images.length -1 ) % images.length;
        break;
                case 'right':
                imageIndex.value =(imageIndex.value + 1)%images.length;
        }
    })
    return (
        <div class="slider">
            {imageIndex.value !== null && <div class="fullSlider">
                <div class="arrow" onClick$={() => changeSlide('left')}>
                    <ArrowIcon />
                </div>
                <div class="imgContainer">
                    <img alt="" src={images[imageIndex.value]} />
                </div>
                <div class="arrow" onClick$={() => changeSlide('right')}>
                    <ArrowIcon class="right"  />
                </div>
                <div class="close" onClick$={() => {imageIndex.value = null}}>X</div>
            </div>
            }
            <div class="bigImage">
                <img src={images[0]} alt="" onClick$={() => (imageIndex.value = 0)} />
            </div>
            <div class="smallImages">
                {images.slice(1).map((image, index)=> (
                    <img src={image} alt="" key={index}
                        onClick$={() => {imageIndex.value = index+1}}
                    />
                ))}
            </div>
        </div>
    )
})
