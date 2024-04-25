import { component$ } from "@builder.io/qwik";
import { listData } from "~/lib/dummydata";
import './index.scss';
import { Filter } from "~/components/filter/filter";
import { Card } from "~/components/card/card";
import { QMap } from "~/components/map/qmap";

const data = listData;

export default component$(()=> {
    return (
        <div class="listPage">
            <div class="listContainer">
                <div class="list-wrapper">
                    <Filter />
                    {data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div class="mapContainer">
                <div class="map">
                    <QMap items={data} />
                </div>
            </div>
        </div>
    )
})
